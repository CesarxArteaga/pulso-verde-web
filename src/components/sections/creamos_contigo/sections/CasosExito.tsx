import CustomSlider from "@/src/components/ui/slider/CustomSlider";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";
import React from "react";

export default function CasosExito() {
  const width = useWindowWidth();
  const showOneSlide = width && width < 768;

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="w-[100%] max-w-[1200px] px-6">
        <div className="">
          <br />
          <h2 className="color-terciary font-[700] text-[40px]">
            Casos de Éxito
          </h2>
          <br />
        </div>
        <CustomSlider visibleSlides={1} config={{ indicatorColor: "#622a58" }}>
          <Card
            imgSrc="/assets/images/caso_exito_1.png"
            nombreCampaña="Campaña Aprofe"
            coments="100"
            likes="24K"
            saved="1.5K"
            views="1.9M"
          />
          <Card
            imgSrc="/assets/images/caso_exito_2.png"
            nombreCampaña="Campaña Aprofe"
            coments="100"
            likes="24K"
            saved="1.5K"
            views="1.9M"
          />
          <Card
            imgSrc="/assets/images/caso_exito_1.png"
            nombreCampaña="Campaña Aprofe"
            coments="100"
            likes="24K"
            saved="1.5K"
            views="1.9M"
          />
          <Card
            imgSrc="/assets/images/caso_exito_2.png"
            nombreCampaña="Campaña Aprofe"
            coments="100"
            likes="24K"
            saved="1.5K"
            views="1.9M"
          />
        </CustomSlider>
        <div>
          <br />
          <p
            className="text-[20px]
                        text-neutral-700
                        font-[500]
                        md:font-[400]          
            "
          >
            Creamos campañas originales que convierten tus iniciativas
            sostenibles en un diferenciador para tus clientes y colaboradores.
            Convertimos conceptos complicados en una valor de marca.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

const Card = React.memo(
  ({
    imgSrc,
    nombreCampaña,
    coments,
    likes,
    saved,
    views,
  }: {
    imgSrc: string;
    nombreCampaña: string;
    views: string;
    likes: string;
    coments: string;
    saved: string;
  }) => (
    <div>
      <div className="flex flex-1 md:grid grid-cols-2">
        <div>
          <div className="border-[10px] h-[520px] border-[#ffbb00]">
            <img
              className="h-[100%] w-[100%]"
              src={imgSrc}
              alt="caso"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="md:hidden absolute bottom-0 w-[100%]">
          <div className="absolute inset-0 bg-secondary opacity-70"></div>
          <div className="relative">
            <div className="px-4 py-4">
              <p className="text-[24px] font-[700]">{nombreCampaña}</p>
              <p className="text-[20px]">Views +{views}</p>
              <p className="text-[20px]">Likes +{likes}</p>
              <p className="text-[20px]">Comentarios +{coments}</p>
              <p className="text-[20px]">Guardados +{saved}</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col pl-6">
          <div className="flex flex-col h-[100%] text-white">
            <div className="bg-secondary rotate-[-3deg]">
              <p className="text-[28px] font-[800] p-3 leading-none rotate-[2deg]">
                {nombreCampaña}
              </p>
              <p></p>
            </div>
            <div className="flex h-[100%] flex-col justify-evenly">
              <div className="bg-secondary">
                <p className="text-[20px] px-3">Views: +{views}</p>
              </div>
              <div className="bg-secondary">
                <p className="text-[20px] px-3">Likes: +{likes}</p>
              </div>
              <div className="bg-secondary">
                <p className="text-[20px] px-3">Comentarios: +{coments}</p>
              </div>
              <div className="bg-secondary">
                <p className="text-[20px] px-3">Guardados: +{saved}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);
