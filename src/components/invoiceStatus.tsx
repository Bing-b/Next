import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-sm",
        {
          "bg-slate-500": status === "pending",
          "bg-red-400": status === "error",
        }
      )}
    ></span>
  );
}
