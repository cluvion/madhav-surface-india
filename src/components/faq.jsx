import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';
import { faqData } from '@/constants/index';

function Faq() {
    return (
        <Accordion className="flex w-full flex-col  divide-y divide-gray-400">
            {faqData.map(({ id, question, answer }) => (
                <AccordionItem key={id} value={id} className="py-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-gray-900">
                        <div className="flex items-center">
                            <ChevronRight className="h-4 w-4  transition-transform duration-200 group-data-[expanded]:rotate-90 text-gray-900" />
                            <div className="ml-2  text-gray-900">{question}
                            </div>

                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left">
                        <p className="font-light pl-6 pr-2 text-gray-600">{answer}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default Faq;
