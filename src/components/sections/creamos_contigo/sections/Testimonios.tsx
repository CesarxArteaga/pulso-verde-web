import React, { useRef } from "react";
import CustomSlider, { CustomSliderRef } from "../../../ui/slider/CustomSlider";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react/dist/ssr";
export default function Testimonios() {

  const showOneSlide = window?.innerWidth < 768;


  const sliderRef = useRef<CustomSliderRef>(null);
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] w-[100%] p-6">
        <div>
          <p className="uppercase text-[40px] text-slate-800 font-[800]">
            Testimonios
          </p>
          <p className="text-[20px]">
            Esto es lo que nuestros clientes opinan sobre nuestro trabajo.
          </p>
          <br />
        </div>
        <div></div>

        <CustomSlider
          ref={sliderRef}
          visibleSlides={showOneSlide ? 1 : 2}
          config={{
            disableDraggable: true,
            hideBarIndicator: true,
            showDots: true,
          }}
        >
          <Card
            imgSrc="/assets/images/testimonio-profile.webp"
            name="Alex Guerra"
            position="Jefe de Marketing en Aprofe"
            coment="Trabajar con ellos fue una experiencia excelente. Desde el primer contacto demostraron profesionalismo, claridad y un compromiso real con los resultados. Superaron nuestras expectativas y sin duda volveríamos a elegirlos."
          />
          <Card
            imgSrc="/assets/images/testimonio-profile.webp"
            name="Alex Guerra"
            position="Jefe de Marketing en Aprofe"
            coment=" ¡Increíble servicio! Entendieron perfectamente lo que necesitábamos y lo hicieron realidad mejor de lo que imaginábamos. La atención fue rápida, amable y muy eficiente. Los recomiendo al 100%"
          />
          <Card
            imgSrc="/assets/images/testimonio-profile.webp"
            name="Alex Guerra"
            position="Jefe de Marketing en Aprofe"
            coment="Gracias a su trabajo, logramos mejorar nuestros resultados en muy poco tiempo. Su enfoque estratégico y atención al detalle marcaron una gran diferencia. Fue una inversión que realmente valió la pena."
          />
          <Card
            imgSrc="/assets/images/testimonio-profile.webp"
            name="Alex Guerra"
            position="Jefe de Marketing en Aprofe"
            coment="Destaco especialmente la comunicación y el acompañamiento durante todo el proceso. Siempre estuvieron disponibles para resolver dudas y proponer mejoras. Se nota la pasión y el compromiso en cada detalle."
          />
        </CustomSlider>

        <div>
          <div>
            <button onClick={() => sliderRef.current?.prev()} className="active:text-purple-700 cursor-pointer">
              <ArrowCircleLeftIcon size={44} />
            </button>
            <button onClick={() => sliderRef.current?.next()} className="active:text-purple-700 cursor-pointer">
              <ArrowCircleRightIcon size={44} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = React.memo(
  ({
    coment,
    imgSrc,
    name,
    position,
  }: {
    coment: string;
    imgSrc: string;
    name: string;
    position: string;
  }) => (
    <div className="p-4">
      <div className="flex flex-col flex-1 bg-slate-100 min-h-[300px] rounded-4xl">
        <div className="p-12">
          <p className="text-[24px] italic text-slate-500 leading-none">"{coment}"</p>
        </div>
        <div className="flex px-12 mb-10">
          <div className="h-[100px] w-[100px] rounded-[60px] overflow-hidden">
            <img
              src={imgSrc}
              alt="profile"
              className="h-[100%] w-[100%] scale-[1.1]"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="pl-4">
            <p className="text-[24px] text-slate-700 leading-none">{name}</p>
            <p className="text-[18px] text-slate-600">{position}</p>
          </div>
        </div>
      </div>
    </div>
  ),
);
