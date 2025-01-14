import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function InfoTag() {
    return (
        <section className="bg-vp text-white flex flex-col sm:flex-row justify-center items-center py-2 gap-2 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-4">
                <FaLocationDot />
                3751 Matlock Rd. #115, Arlington, TX 76015
            </div>
            <div className="hidden sm:block h-4 w-[2px] bg-white rounded-full"></div>
            <div className="flex items-center gap-2 sm:gap-4">
                <FaPhone />
                (817) 375-9000
            </div>
        </section>
    );
}