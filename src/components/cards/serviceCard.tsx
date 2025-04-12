import React, { FC } from 'react';
import { IServiceCard } from '@/models/client';
import {
  cardWrapper,
  cardTitle,
  iconWrapper,
  iconClass,
} from '@/styles/variants';
import { cn } from '@/lib';

interface ServiceCardProps extends IServiceCard {}

const ServiceCard: FC<ServiceCardProps> = ({ category, services, variant }) => {
  return (
    <div className={cardWrapper({ variant })}>
      <h2 className={cardTitle({ variant })}>{category}</h2>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-6">
        {services.map((service, idx) => (
          <li
            key={idx}
            className={`flex justify-center text-sm ${
              service.disabled
                ? 'pointer-events-none text-gray-400'
                : 'text-black'
            }`}
          >
            <div className="flex cursor-pointer flex-col items-center gap-4">
              <div className={`${iconWrapper({ variant })}`}>
                {React.cloneElement(service.icon, {
                  className: cn(
                    iconClass({ variant }),
                    service.disabled && 'text-gray-400!',
                  ),
                })}
              </div>
              <span className="text-center">{service.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
