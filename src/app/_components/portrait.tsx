import Image from "next/image";
import cn from "classnames";
import profilePhoto from "@/src/public/assets/blog/landing-page/20240412-Rivard_edited.jpg";

export default function Portrait() {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <div className="flex items-center justify-center columns-2 gap-20 sm:mx-0">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                        {"Northeastern Bachelor's Cum Laude in Mechanical Engineering and Minor in Computer Science"}
                    </h3>
                    <h4 className= "mb-4 text-lg lg:text-xl leading-tight">
                        {"An interdisiplinary engineer with full product lifecycle experience. Capable of leveraging custom modern tools to solve problems with efficiency and nuance."}
                    </h4>
                </div>
                <Image 
                    src={profilePhoto}
                    alt="Photo of Ryan Rivard"
                    className={cn("shadow-sm w-1/2")}
                    width={2000}
                    height={2317}
                />
            </div>
        </section>
    );
};