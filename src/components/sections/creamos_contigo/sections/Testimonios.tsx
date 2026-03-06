import React, { useRef } from "react";
import CustomSlider, { CustomSliderRef } from "../../../ui/slider/CustomSlider";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
export default function Testimonios() {
  const width = useWindowWidth();

  const sliderRef = useRef<CustomSliderRef>(null);
  return (
    <div className="flex justify-center bg-slate-50">
      <div
        className="
                    max-w-[1200px] 
                    w-[100%] 
                    px-6 
                    pt-[50px]
                    pb-[50px]
      "
      >
        <div>
          <p
            className="
                      text-[40px] 
                      text-neutral-700 
                      font-[700]
                      color-primary
          "
          >
            Testimonios
          </p>
          <p
            className="
          text-[20px] 
          font-[500] 
          md:font-[400] 
          text-neutral-700
          leading-none
          py-[20px]
          text-center
          md:text-left
          "
          >
            Esto es lo que nuestros clientes opinan sobre nuestro trabajo.
          </p>
          <br />
        </div>
        <div></div>

        <CustomSlider
          ref={sliderRef}
          visibleSlides={1}
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
            <button
              onClick={() => sliderRef.current?.prev()}
              className="active:text-purple-700 cursor-pointer"
            >
              <ArrowCircleLeftIcon size={44} />
            </button>
            <button
              onClick={() => sliderRef.current?.next()}
              className="active:text-purple-700 cursor-pointer"
            >
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
    <div className="">
      <div
        className="
                    flex 
                    flex-col 
                    flex-1 
                    bg-slate-200/60 
                    rounded-4xl 
                    py-6
                    md:py-12
                    "
      >
        <div
          className="
                    px-6
                    md:px-12
                    "
        >
          <p
            className="
                      text-[20px]
                      md:text-[22px] 
                      italic 
                      text-neutral-700 
                      leading-none
                      text-justify
                      mb-6
                      "
          >
            "{coment}"
          </p>
        </div>
        <div className="flex flex-col md:flex-row mx-6 md:mx-12">
          <div
            className="
                      w-[60px]
                      h-[60px]
                      md:h-[100px] 
                      md:w-[100px]
                      rounded-[60px] 
                      overflow-hidden
                      "
          >
            <img
              src={imgSrc}
              alt="profile"
              className="h-[100%] w-[100%] scale-[1.1]"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="mt-2 md:ml-4">
            <p className="text-[20px] md:text-[24px] text-slate-700 leading-none">
              {name}
            </p>
            <p className="text-[18px] text-slate-600 leading-none">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
);
