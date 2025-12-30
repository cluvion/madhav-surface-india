import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PageHeader({ title, src, path }) {
    return (
        <div className="relative">
            {/* Header Section */}
            <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={src}
                        alt="Background"
                        className="w-full h-full object-cover"
                        fill
                    />
                    {/* Optional overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6 space-y-4">
                    <h1
                        className="heading font-bold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none text-white"
                    >
                        {title}
                    </h1>
                    <div className="flex justify-center">
                        <Breadcrumb>
                            <BreadcrumbList className="text-background/60">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="hover:text-background transition-colors">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-background/40" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-background font-medium">{path}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    );
}