export function InfoField({
  label,
  value,
  Icon,
}: {
  label: string;
  value: string;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] text-[#dae2fd]/30 uppercase tracking-wide font-medium flex items-center gap-1">
        <Icon className="size-2.5" />
        {label}
      </span>
      <span className="text-xs text-[#dae2fd]/75 leading-relaxed wrap-break-word">
        {value || "—"}
      </span>
    </div>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center gap-3">
      <div className="w-12 h-12 rounded-full bg-[#171f33] border border-[#464554] flex items-center justify-center">
        <Icon className="size-5 text-[#dae2fd]/15" />
      </div>
      <div>
        <p className="text-sm font-medium text-[#dae2fd]/35">{title}</p>
        <p className="text-xs text-[#dae2fd]/20 mt-1 max-w-65 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
