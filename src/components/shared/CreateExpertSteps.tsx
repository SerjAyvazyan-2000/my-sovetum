import { Link, useLocation } from 'react-router-dom'
import React from "react";
import { motion } from 'framer-motion';

interface Props {}

const CreateExpertSteps: React.FC<Props> = () => {
    const location = useLocation()

    const steps = [
        { path: '/onboarding/createExpertStep1' },
        { path: '/onboarding/createExpertStep2' },
        { path: '/onboarding/createExpertStep3' },
        { path: '/onboarding/createExpertStep4' },
    ]

    const currentStepIndex = steps.findIndex((step) => step.path === location.pathname)

    return (
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.4 }} className="mt-[24px]  mx-[16px] mb-[16px] flex gap-[4px] z-[1]">
            {steps.map((step, index) => (
                <Link
                    key={index}
                    to={step.path}
                    className={`flex-1 h-[6px] hover:bg-[#A281CD]  transition-all duration-300 rounded-[10px] transition-all duration-200 ${
                        index <= currentStepIndex ? 'bg-[#A281CD]' : 'bg-[#F2EDF8]'
                    }`}
                />
            ))}
        </motion.div>
    )
}

export default CreateExpertSteps