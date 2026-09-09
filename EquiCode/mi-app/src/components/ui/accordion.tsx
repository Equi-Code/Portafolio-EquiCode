import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "./../../lib/utils";

// Contexto simple para manejar el estado en el componente Root
const AccordionContext = React.createContext<{
    openValue: string | null;
    toggleValue: (val: string) => void;
}>({
    openValue: null,
    toggleValue: () => { },
});

interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    type?: "single";
    collapsible?: boolean;
}

const Accordion = ({ children, className }: AccordionProps) => {
    const [openValue, setOpenValue] = React.useState<string | null>(null);

    const toggleValue = React.useCallback((val: string) => {
        setOpenValue((prev) => (prev === val ? null : val));
    }, []);

    return (
        <AccordionContext.Provider value={{ openValue, toggleValue }}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
};

const ItemContext = React.createContext<{ value: string }>({ value: "" });

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => (
    <ItemContext.Provider value={{ value }}>
        <div ref={ref} className={cn("border-b", className)} {...props}>
            {children}
        </div>
    </ItemContext.Provider>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const { openValue, toggleValue } = React.useContext(AccordionContext);
    const { value } = React.useContext(ItemContext);
    const isOpen = openValue === value;

    return (
        <div className="flex">
            <button
                ref={ref}
                type="button"
                onClick={() => toggleValue(value)}
                aria-expanded={isOpen}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown
                    className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
        </div>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const { openValue } = React.useContext(AccordionContext);
    const { value } = React.useContext(ItemContext);
    const isOpen = openValue === value;

    return (
        <div
            ref={ref}
            className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
            {...props}
        >
            <div className="overflow-hidden text-sm">
                <div className={cn("pb-4 pt-0", className)}>{children}</div>
            </div>
        </div>
    );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
