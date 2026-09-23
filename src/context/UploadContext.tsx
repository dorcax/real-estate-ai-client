import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

import {
  useCreateUploadMutation,
  useDeleteUploadMutation,
} from "@/api/upload.api";

type PropertyImage = {
  id: string;
  url: string;
  publicId: string;
  order: number;
};

type PropertyImageContextType = {
  images: PropertyImage[];
  uploadImage: (file: File) => Promise<void>;
  deleteImage: (id: string) => Promise<void>;
  clearImages: () => void;
  isUploading: boolean;
};

const PropertyImageContext =
  createContext<PropertyImageContextType | null>(null);

export const PropertyImageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [createUpload] = useCreateUploadMutation();
  const [deleteUpload] = useDeleteUploadMutation();

  const [images, setImages] = useState<PropertyImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = useCallback(
    async (file: File) => {
      setIsUploading(true);

      try {
        const formData = new FormData();

        formData.append("file", file);

        const response = await createUpload(formData).unwrap();

        setImages((prev) => [
          ...prev,
          {
            id: response.id,
            url: response.url,
            publicId: response.publicId,
            order: response.order,
          },
        ]);
      } finally {
        setIsUploading(false);
      }
    },
    [createUpload],
  );

  const deleteImage = useCallback(
    async (id: string) => {
      await deleteUpload(id).unwrap();

      setImages((prev) => prev.filter((image) => image.id !== id));
    },
    [deleteUpload],
  );

  const clearImages = useCallback(() => {
    setImages([]);
  }, []);

  return (
    <PropertyImageContext.Provider
      value={{
        images,
        uploadImage,
        deleteImage,
        clearImages,
        isUploading,
      }}
    >
      {children}
    </PropertyImageContext.Provider>
  );
};

export const usePropertyImages = () => {
  const context = useContext(PropertyImageContext);

  if (!context) {
    throw new Error(
      "usePropertyImages must be used inside PropertyImageProvider",
    );
  }

  return context;
};