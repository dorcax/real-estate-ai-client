
import {
    AlertCircle,
    ChevronRight,
    ImagePlus,
    Save
} from "lucide-react";
import { useState } from "react";

import {
    SiFacebook,
    SiInstagram,
    SiX,
} from "react-icons/si";
// import { FaLinkedinIn } from "react-icons/fa6";

type WebsiteSettings = {
  websiteName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  officeHours: string;
  officeAddress: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  x: string;
};

type Props = {
  initialData?: Partial<WebsiteSettings>;
  onSave?: (data: WebsiteSettings & {
    logo: File | null;
    favicon: File | null;
  }) => Promise<void> | void;
};

const defaultData: WebsiteSettings = {
  websiteName: "Aura Properties",
  tagline: "Find a home worth coming back to.",
  description:
    "Aura Properties curates the finest residences across Nigeria's most sought-after addresses — verified, beautifully presented, and matched to how you actually live.",
  email: "hello@aurarealty.ng",
  phone: "+234 1 460 7788",
  whatsapp: "+234 803 441 2290",
  officeHours: "Mon-Sat · 9-6",
  officeAddress: "14 Admiralty Way, Lekki Phase 1, Lagos",
  instagram: "auraproperties",
  facebook: "auraproperties",
  linkedin: "aura",
  x: "username",
};

const inputClass =
  "w-full h-[38px] rounded-lg border border-[#29354F] bg-[#101A30] px-3 text-xs text-[#DAE2FD] outline-none transition placeholder:text-[#64748B] focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/20";

const labelClass =
  "block text-[11px] font-medium text-[#A5B4D0] mb-1.5";

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="min-w-0">
      <label className={labelClass}>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

function UploadCard({
  title,
  fileType,
  currentName,
  file,
  onChange,
  accept,
}: {
  title: string;
  fileType: string;
  currentName: string;
  file: File | null;
  onChange: (file: File | null) => void;
  accept: string;
}) {
  const [error, setError] = useState("");

  const handleFile = (selectedFile?: File) => {
    if (!selectedFile) return;

    if (selectedFile.size > 2 * 1024 * 1024) {
      setError("File must be less than 2MB");
      return;
    }

    if (
      accept === "image/svg+xml,image/png" &&
      !["image/svg+xml", "image/png"].includes(selectedFile.type)
    ) {
      setError("Only PNG and SVG files are supported");
      return;
    }

    if (
      accept === "image/png,image/x-icon,image/vnd.microsoft.icon" &&
      !["image/png", "image/x-icon", "image/vnd.microsoft.icon"].includes(
        selectedFile.type
      )
    ) {
      setError("Please select a PNG or ICO favicon");
      return;
    }

    setError("");
    onChange(selectedFile);
  };

  return (
    <div className="space-y-2">
      <label className={labelClass}>{title}</label>

      <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-[#35415C] bg-[#101A30] p-3 min-h-[56px]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-9 shrink-0 rounded-lg bg-[#060E20] flex items-center justify-center text-[#C0C1FF]">
            <ImagePlus size={17} />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-[#DAE2FD] truncate">
              {file?.name || currentName}
            </p>
            <p className="text-[10px] text-[#64748B]">
              {file ? "New file selected" : fileType}
            </p>
          </div>
        </div>

        <label className="shrink-0 text-[10px] font-medium text-[#A5B4FF] hover:text-white cursor-pointer">
          Replace
          <input
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </label>
      </div>

      {error && (
        <p className="text-[10px] text-red-400">{error}</p>
      )}
    </div>
  );
}

export default function WebsiteGeneral({
  initialData,
  onSave,
}: Props) {
  const [form, setForm] = useState<WebsiteSettings>({
    ...defaultData,
    ...initialData,
  });

  const [savedForm, setSavedForm] = useState<WebsiteSettings>({
    ...defaultData,
    ...initialData,
  });

  const [logo, setLogo] = useState<File | null>(null);
  const [favicon, setFavicon] = useState<File | null>(null);
  const [savedFiles, setSavedFiles] = useState<{
    logo: File | null;
    favicon: File | null;
  }>({ logo: null, favicon: null });

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const isDirty =
    JSON.stringify(form) !== JSON.stringify(savedForm) ||
    logo !== savedFiles.logo ||
    favicon !== savedFiles.favicon;

  const updateField = (key: keyof WebsiteSettings, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    setForm(savedForm);
    setLogo(savedFiles.logo);
    setFavicon(savedFiles.favicon);
    setSaveError("");
  };

  const handleSave = async () => {
    if (!isDirty || saving) return;

    setSaving(true);
    setSaveError("");

    try {
      await onSave?.({
        ...form,
        logo,
        favicon,
      });

      setSavedForm(form);
      setSavedFiles({ logo, favicon });
    } catch (error) {
      setSaveError(
        error instanceof Error ? error.message : "Unable to save settings"
      );
    } finally {
      setSaving(false);
    }
  };

const socialFields = [
  {
    key: "instagram" as const,
    prefix: "instagram.com/",
    color: "bg-[#E1306C]",
    Icon: SiInstagram,
  },
  {
    key: "facebook" as const,
    prefix: "facebook.com/",
    color: "bg-[#1877F2]",
    Icon: SiFacebook,
  },
//   {
//     key: "linkedin" as const,
//     prefix: "linkedin.com/company/",
//     color: "bg-[#0A66C2]",
//     Icon:<FaLinkedinIn />,
//   },
  {
    key: "x" as const,
    prefix: "x.com/",
    color: "bg-[#050505]",
    Icon: SiX,
  },
];

  return (
    <div className="min-h-screen bg-[#020617] text-[#DAE2FD]">

      {/* HEADER */}
      <div className="sticky top-0 z-20 border-b border-[#29354F] bg-[#080F20]/95 backdrop-blur-md">
        <div className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          <div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#647B9F] mb-1">
              <span>Dashboard</span>
              <ChevronRight size={11} />
              <span>Website</span>
            </div>

            <h1 className="text-sm font-semibold text-[#DAE2FD]">
              General Settings
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {isDirty && (
              <span className="flex items-center gap-1.5 rounded-full bg-[#342B19] px-3 py-1 text-[10px] font-medium text-[#FBBF24]">
                <span className="size-1.5 rounded-full bg-[#FBBF24]" />
                Unsaved changes
              </span>
            )}

            {!isDirty && (
              <span className="text-[10px] text-[#64748B]">
                All changes saved
              </span>
            )}

            <button
              type="button"
              onClick={handleCancel}
              disabled={!isDirty || saving}
              className="text-[11px] text-[#A5B4D0] hover:text-white disabled:opacity-40"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={!isDirty || saving}
              className="flex items-center gap-2 rounded-lg bg-[#C0C1FF] px-4 py-2 text-[11px] font-semibold text-[#100E36] hover:bg-[#A5A6FF] disabled:opacity-40 transition"
            >
              <Save size={13} />
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </div>
      </div>

      {/* FORM CONTENT */}
      <div className="p-5 max-w-[1200px] space-y-3">

        {/* WEBSITE IDENTITY + LOGO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-3">

          {/* WEBSITE IDENTITY */}
          <section className="rounded-xl border border-[#29354F] bg-[#171F33] p-4 space-y-3">

            <h2 className="text-xs font-semibold text-[#DAE2FD]">
              Website identity
            </h2>

            <Field
              label="Website name"
              value={form.websiteName}
              onChange={(v) => updateField("websiteName", v)}
              placeholder="Enter your website name"
            />

            <Field
              label="Tagline"
              value={form.tagline}
              onChange={(v) => updateField("tagline", v)}
              placeholder="Your brand tagline"
            />
          </section>

          {/* LOGO AND FAVICON */}
          <section className="rounded-xl border border-[#29354F] bg-[#171F33] p-4 space-y-3">

            <h2 className="text-xs font-semibold text-[#DAE2FD]">
              Logo & favicon
            </h2>

            <UploadCard
              title="Company logo"
              currentName="company-logo.svg"
              fileType="PNG or SVG · max 2MB"
              file={logo}
              onChange={setLogo}
              accept="image/svg+xml,image/png"
            />

            <UploadCard
              title="Favicon"
              currentName="favicon.png"
              fileType="PNG or ICO · max 2MB"
              file={favicon}
              onChange={setFavicon}
              accept="image/png,image/x-icon,image/vnd.microsoft.icon"
            />
          </section>
        </div>

        {/* COMPANY DESCRIPTION */}
        <section className="rounded-xl border border-[#29354F] bg-[#171F33] p-4 space-y-3">

          <h2 className="text-xs font-semibold text-[#DAE2FD]">
            Company description
          </h2>

          <textarea
            value={form.description}
            onChange={(e) =>
              updateField("description", e.target.value)
            }
            rows={3}
            placeholder="Tell visitors about your company..."
            className="w-full resize-y min-h-[80px] rounded-lg border border-[#29354F] bg-[#101A30] p-3 text-xs text-[#DAE2FD] outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/20"
          />
        </section>

        {/* CONTACT + SOCIAL LINKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

          {/* CONTACT */}
          <section className="rounded-xl border border-[#29354F] bg-[#171F33] p-4 space-y-3">

            <h2 className="text-xs font-semibold text-[#DAE2FD]">
              Contact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <Field
                label="Email"
                value={form.email}
                onChange={(v) => updateField("email", v)}
                placeholder="company@example.com"
              />

              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => updateField("phone", v)}
                placeholder="+234..."
              />

              <Field
                label="WhatsApp"
                value={form.whatsapp}
                onChange={(v) => updateField("whatsapp", v)}
                placeholder="+234..."
              />

              <Field
                label="Office hours"
                value={form.officeHours}
                onChange={(v) => updateField("officeHours", v)}
                placeholder="Mon-Sat · 9-6"
              />

              <div className="sm:col-span-2">
                <Field
                  label="Office address"
                  value={form.officeAddress}
                  onChange={(v) => updateField("officeAddress", v)}
                  placeholder="Enter your office address"
                />
              </div>
            </div>
          </section>

          {/* SOCIAL LINKS */}
          <section className="rounded-xl border border-[#29354F] bg-[#171F33] p-4 space-y-3">

            <h2 className="text-xs font-semibold text-[#DAE2FD]">
              Social links
            </h2>

            <div className="space-y-2">
              {socialFields.map(({ key, prefix, color, Icon }) => (
                <div key={key} className="flex items-center gap-2">

                  <div
                    className={`size-7 shrink-0 rounded-md ${color} flex items-center justify-center text-white`}
                  >
                    <Icon size={15} />
                  </div>

                  <div className="flex flex-1 min-w-0 h-[36px] rounded-lg overflow-hidden border border-[#29354F] bg-[#101A30] focus-within:border-[#818CF8]">

                    <span className="flex items-center px-2 text-[10px] text-[#8294B9] border-r border-[#29354F] whitespace-nowrap">
                      {prefix}
                    </span>

                    <input
                      value={form[key]}
                      onChange={(e) =>
                        updateField(key, e.target.value)
                      }
                      placeholder="username"
                      className="w-full min-w-0 bg-transparent px-2 text-xs text-[#DAE2FD] outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {saveError && (
          <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
            <AlertCircle size={15} />
            {saveError}
          </div>
        )}

      </div>
    </div>
    
  );
}
