import { Container } from "@/config/Others/Container";
import { StepCard } from "./StepCard";
import { TitleItinerarySteepCard } from "./TitleItinerarySteepCard";
import { stepsDataItinerary } from "./Configs/banners";
import CarrouselSteps from "./CarrouselSteps";

export function StepsCards({activeStep}) {
    return (
        <>  
            <div className="lg:flex hidden items-stretch mt-2 flex-col">
                <TitleItinerarySteepCard/>
                
                <div className="grid grid-cols-2 mt-6 gap-x-[31px] gap-y-[40px] w-max ">
                    {stepsDataItinerary.map((step, index) => (
                        <div key={index} className='w-[200px] h-[200px]'>
                            <StepCard activeStep={activeStep} number={step.number} stepType={step.stepType} />
                        </div>
                    ))}
                </div>
            </div>

            <Container>
                <CarrouselSteps activeStep={activeStep} stepData={stepsDataItinerary} />
            </Container>
        </>
    );
}
