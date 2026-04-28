"use client";

interface ZohoFormProps {
  src: string;
  label?: string;
  height?: string;
}

export default function ZohoForm({ src, label = "Zoho Form", height = "900px" }: ZohoFormProps) {
  return (
    <div className="w-full overflow-hidden">
      <iframe
        aria-label={label}
        frameBorder="0"
        style={{
          minHeight: height,
          height: "auto",
          width: "100%",
          border: "none",
          transition: "all 0.5s ease",
        }}
        src={src}
      />
    </div>
  );
}
