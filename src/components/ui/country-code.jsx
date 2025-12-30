"use client"

import { Fragment, useId, useState } from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const countries = [
    {
        continent: "Asia",
        items: [
            { value: "+93", flag: "🇦🇫" },
            { value: "+374", flag: "🇦🇲" },
            { value: "+994", flag: "🇦🇿" },
            { value: "+973", flag: "🇧🇭" },
            { value: "+880", flag: "🇧🇩" },
            { value: "+975", flag: "🇧🇹" },
            { value: "+673", flag: "🇧🇳" },
            { value: "+855", flag: "🇰🇭" },
            { value: "+86", flag: "🇨🇳" },
            { value: "+91", flag: "🇮🇳" },
            { value: "+62", flag: "🇮🇩" },
            { value: "+98", flag: "🇮🇷" },
            { value: "+964", flag: "🇮🇶" },
            { value: "+972", flag: "🇮🇱" },
            { value: "+81", flag: "🇯🇵" },
            { value: "+962", flag: "🇯🇴" },
            { value: "+7", flag: "🇰🇿" },
            { value: "+965", flag: "🇰🇼" },
            { value: "+996", flag: "🇰🇬" },
            { value: "+856", flag: "🇱🇦" },
            { value: "+961", flag: "🇱🇧" },
            { value: "+60", flag: "🇲🇾" },
            { value: "+960", flag: "🇲🇻" },
            { value: "+976", flag: "🇲🇳" },
            { value: "+95", flag: "🇲🇲" },
            { value: "+977", flag: "🇳🇵" },
            { value: "+850", flag: "🇰🇵" },
            { value: "+968", flag: "🇴🇲" },
            { value: "+92", flag: "🇵🇰" },
            { value: "+970", flag: "🇵🇸" },
            { value: "+63", flag: "🇵🇭" },
            { value: "+974", flag: "🇶🇦" },
            { value: "+966", flag: "🇸🇦" },
            { value: "+65", flag: "🇸🇬" },
            { value: "+82", flag: "🇰🇷" },
            { value: "+94", flag: "🇱🇰" },
            { value: "+963", flag: "🇸🇾" },
            { value: "+886", flag: "🇹🇼" },
            { value: "+992", flag: "🇹🇯" },
            { value: "+66", flag: "🇹🇭" },
            { value: "+90", flag: "🇹🇷" },
            { value: "+993", flag: "🇹🇲" },
            { value: "+971", flag: "🇦🇪" },
            { value: "+998", flag: "🇺🇿" },
            { value: "+84", flag: "🇻🇳" },
            { value: "+967", flag: "🇾🇪" },
        ],
    },
    {
        continent: "Europe",
        items: [
            { value: "+355", flag: "🇦🇱" },
            { value: "+376", flag: "🇦🇩" },
            { value: "+43", flag: "🇦🇹" },
            { value: "+375", flag: "🇧🇾" },
            { value: "+32", flag: "🇧🇪" },
            { value: "+387", flag: "🇧🇦" },
            { value: "+359", flag: "🇧🇬" },
            { value: "+385", flag: "🇭🇷" },
            { value: "+357", flag: "🇨🇾" },
            { value: "+420", flag: "🇨🇿" },
            { value: "+45", flag: "🇩🇰" },
            { value: "+372", flag: "🇪🇪" },
            { value: "+358", flag: "🇫🇮" },
            { value: "+33", flag: "🇫🇷" },
            { value: "+995", flag: "🇬🇪" },
            { value: "+49", flag: "🇩🇪" },
            { value: "+30", flag: "🇬🇷" },
            { value: "+36", flag: "🇭🇺" },
            { value: "+354", flag: "🇮🇸" },
            { value: "+353", flag: "🇮🇪" },
            { value: "+39", flag: "🇮🇹" },
            { value: "+371", flag: "🇱🇻" },
            { value: "+370", flag: "🇱🇹" },
            { value: "+352", flag: "🇱🇺" },
            { value: "+389", flag: "🇲🇰" },
            { value: "+356", flag: "🇲🇹" },
            { value: "+373", flag: "🇲🇩" },
            { value: "+377", flag: "🇲🇨" },
            { value: "+382", flag: "🇲🇪" },
            { value: "+31", flag: "🇳🇱" },
            { value: "+47", flag: "🇳🇴" },
            { value: "+48", flag: "🇵🇱" },
            { value: "+351", flag: "🇵🇹" },
            { value: "+40", flag: "🇷🇴" },
            { value: "+7", flag: "🇷🇺" },
            { value: "+378", flag: "🇸🇲" },
            { value: "+381", flag: "🇷🇸" },
            { value: "+421", flag: "🇸🇰" },
            { value: "+386", flag: "🇸🇮" },
            { value: "+34", flag: "🇪🇸" },
            { value: "+46", flag: "🇸🇪" },
            { value: "+41", flag: "🇨🇭" },
            { value: "+380", flag: "🇺🇦" },
            { value: "+44", flag: "🇬🇧" },
            { value: "+379", flag: "🇻🇦" },
        ],
    },
    {
        continent: "North America",
        items: [
            { value: "+1", flag: "🇺🇸" },
            { value: "+1", flag: "🇨🇦" },
            { value: "+52", flag: "🇲🇽" },
            { value: "+1242", flag: "🇧🇸" },
            { value: "+1246", flag: "🇧🇧" },
            { value: "+501", flag: "🇧🇿" },
            { value: "+506", flag: "🇨🇷" },
            { value: "+53", flag: "🇨🇺" },
            { value: "+1767", flag: "🇩🇲" },
            { value: "+1809", flag: "🇩🇴" },
            { value: "+503", flag: "🇸🇻" },
            { value: "+1473", flag: "🇬🇩" },
            { value: "+502", flag: "🇬🇹" },
            { value: "+509", flag: "🇭🇹" },
            { value: "+504", flag: "🇭🇳" },
            { value: "+1876", flag: "🇯🇲" },
            { value: "+505", flag: "🇳🇮" },
            { value: "+507", flag: "🇵🇦" },
            { value: "+1787", flag: "🇵🇷" },
            { value: "+1869", flag: "🇰🇳" },
            { value: "+1758", flag: "🇱🇨" },
            { value: "+1784", flag: "🇻🇨" },
            { value: "+1868", flag: "🇹🇹" },
        ],
    },
    {
        continent: "South America",
        items: [
            { value: "+54", flag: "🇦🇷" },
            { value: "+591", flag: "🇧🇴" },
            { value: "+55", flag: "🇧🇷" },
            { value: "+56", flag: "🇨🇱" },
            { value: "+57", flag: "🇨🇴" },
            { value: "+593", flag: "🇪🇨" },
            { value: "+594", flag: "🇬🇫" },
            { value: "+592", flag: "🇬🇾" },
            { value: "+595", flag: "🇵🇾" },
            { value: "+51", flag: "🇵🇪" },
            { value: "+597", flag: "🇸🇷" },
            { value: "+598", flag: "🇺🇾" },
            { value: "+58", flag: "🇻🇪" },
        ],
    },
    {
        continent: "Africa",
        items: [
            { value: "+213", flag: "🇩🇿" },
            { value: "+244", flag: "🇦🇴" },
            { value: "+229", flag: "🇧🇯" },
            { value: "+267", flag: "🇧🇼" },
            { value: "+226", flag: "🇧🇫" },
            { value: "+257", flag: "🇧🇮" },
            { value: "+237", flag: "🇨🇲" },
            { value: "+238", flag: "🇨🇻" },
            { value: "+236", flag: "🇨🇫" },
            { value: "+235", flag: "🇹🇩" },
            { value: "+269", flag: "🇰🇲" },
            { value: "+242", flag: "🇨🇬" },
            { value: "+243", flag: "🇨🇩" },
            { value: "+253", flag: "🇩🇯" },
            { value: "+20", flag: "🇪🇬" },
            { value: "+240", flag: "🇬🇶" },
            { value: "+291", flag: "🇪🇷" },
            { value: "+251", flag: "🇪🇹" },
            { value: "+241", flag: "🇬🇦" },
            { value: "+220", flag: "🇬🇲" },
            { value: "+233", flag: "🇬🇭" },
            { value: "+224", flag: "🇬🇳" },
            { value: "+245", flag: "🇬🇼" },
            { value: "+225", flag: "🇨🇮" },
            { value: "+254", flag: "🇰🇪" },
            { value: "+266", flag: "🇱🇸" },
            { value: "+231", flag: "🇱🇷" },
            { value: "+218", flag: "🇱🇾" },
            { value: "+261", flag: "🇲🇬" },
            { value: "+265", flag: "🇲🇼" },
            { value: "+223", flag: "🇲🇱" },
            { value: "+222", flag: "🇲🇷" },
            { value: "+230", flag: "🇲🇺" },
            { value: "+212", flag: "🇲🇦" },
            { value: "+258", flag: "🇲🇿" },
            { value: "+264", flag: "🇳🇦" },
            { value: "+227", flag: "🇳🇪" },
            { value: "+234", flag: "🇳🇬" },
            { value: "+250", flag: "🇷🇼" },
            { value: "+239", flag: "🇸🇹" },
            { value: "+221", flag: "🇸🇳" },
            { value: "+248", flag: "🇸🇨" },
            { value: "+232", flag: "🇸🇱" },
            { value: "+252", flag: "🇸🇴" },
            { value: "+27", flag: "🇿🇦" },
            { value: "+211", flag: "🇸🇸" },
            { value: "+249", flag: "🇸🇩" },
            { value: "+268", flag: "🇸🇿" },
            { value: "+255", flag: "🇹🇿" },
            { value: "+228", flag: "🇹🇬" },
            { value: "+216", flag: "🇹🇳" },
            { value: "+256", flag: "🇺🇬" },
            { value: "+260", flag: "🇿🇲" },
            { value: "+263", flag: "🇿🇼" },
        ],
    },
    {
        continent: "Oceania",
        items: [
            { value: "+61", flag: "🇦🇺" },
            { value: "+679", flag: "🇫🇯" },
            { value: "+686", flag: "🇰🇮" },
            { value: "+692", flag: "🇲🇭" },
            { value: "+691", flag: "🇫🇲" },
            { value: "+674", flag: "🇳🇷" },
            { value: "+64", flag: "🇳🇿" },
            { value: "+680", flag: "🇵🇼" },
            { value: "+675", flag: "🇵🇬" },
            { value: "+685", flag: "🇼🇸" },
            { value: "+677", flag: "🇸🇧" },
            { value: "+676", flag: "🇹🇴" },
            { value: "+688", flag: "🇹🇻" },
            { value: "+678", flag: "🇻🇺" },
        ],
    },
]


export default function CountryCode({ value, onChange, className = "", label = "Country Code", placeholder = "Select country", buttonClassName = "", contentClassName = "" }) {
    const id = useId()
    const [open, setOpen] = useState(false)

    const handleSelect = (selectedValue) => {
        onChange?.(selectedValue)
        setOpen(false)
    }

    return (
        <div className={`*:not-first:mt-2 ${className}`} >
            {label && <Label htmlFor={id}>{label}</Label>}
            <Popover open={open} onOpenChange={setOpen} >
                <PopoverTrigger asChild>
                    <button
                        id={id}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={`border border-foreground/10 shadow-xs w-full px-3 font-normal flex flex-nowrap items-center ${buttonClassName}`}
                    >
                        {value ? (
                            <span className="flex min-w-0 items-center gap-2">
                                <span className="text-lg leading-none">
                                    {
                                        countries
                                            .map((group) =>
                                                group.items.find((item) => item.value === value)
                                            )
                                            .filter(Boolean)[0]?.flag
                                    }
                                </span>
                                <span className="truncate">{value}</span>
                            </span>
                        ) : (
                            <span className="text-foreground/30">{placeholder}</span>
                        )}
                        <ChevronDownIcon
                            size={16}
                            className="text-foreground/30 shrink-0 ml-2"
                            aria-hidden="true"
                        />
                    </button>
                </PopoverTrigger>
                <PopoverContent
                    className={`border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0 ${contentClassName}`}
                    align="start"
                    data-light-bg
                >
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            {countries.map((group) => (
                                <Fragment key={group.continent}>
                                    <CommandGroup heading={group.continent}>
                                        {group.items.map((country, index) => (
                                            <CommandItem
                                                key={`${country.value}-${country.flag}-${index}`}
                                                value={country.value}
                                                onSelect={handleSelect}
                                            >
                                                <span className="text-lg leading-none">
                                                    {country.flag}
                                                </span>{" "}
                                                {country.value}
                                                {value === country.value && (
                                                    <CheckIcon size={16} className="ml-auto" />
                                                )}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Fragment>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
