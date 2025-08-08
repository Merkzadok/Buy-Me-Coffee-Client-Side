import { Camera } from "lucide-react";
import { Input } from "../../ui/input";
import { useRef, useState } from "react";
import { toast } from "sonner";

type profileImageType = {
  value: string;
  touchedErr?: boolean;
  error?: string;
  setImageField: (url: string) => void;
};

export const ProfileImageUploader = ({
  value,
  touchedErr,
  error,
  setImageField,
}: profileImageType) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const focusInput = () => {
    inputElement.current?.click();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "coverImage");
    setUploading(true);
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/duw6cdsyv/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        // setFieldValue("profileImage", data.secure_url);
        setImageField(data.secure_url);
      }
    } catch (error) {
      toast.error("Error");
    } finally {
      setUploading(false);
    }
  };

  const inputBorderImageErrorStyle =
    touchedErr && error
      ? "flex justify-center items-center w-[160px] h-[160px] border-2 border-dashed rounded-full border-red-500"
      : "flex justify-center items-center w-[160px] h-[160px] border-2 border-dashed rounded-full";

  return (
    <div>
      {" "}
      <div>
        <Input
          type="file"
          ref={inputElement}
          className="hidden"
          onChange={handleImageUpload}
        />

        <div onClick={focusInput} className={inputBorderImageErrorStyle}>
          {value && (
            <img
              src={value}
              alt="preview"
              className="w-full h-full rounded-full object-cover"
            />
          )}

          {!value && (
            <div>
              {uploading ? (
                "uploading..."
              ) : (
                <Camera className="text-gray-400 font-thin" />
              )}
            </div>
          )}
        </div>

        {touchedErr && error && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
      </div>
    </div>
  );
};
