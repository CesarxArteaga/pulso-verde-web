import CustomSlider from "@/src/components/ui/slider/CustomSlider";
import React from "react";

export default function CasosExito() {
  const showOneSlide = window?.innerWidth < 768;

  return (
    <div className="flex justify-center">
      <div className="w-[100%] max-w-[1200px] p-6">
        <div className="">
          <br />
          <h2 className="uppercase color-terciary font-[800] text-[40px]">
            casos de éxito
          </h2>
          <br />
        </div>
        <CustomSlider
          visibleSlides={showOneSlide ? 1 : 2}
          config={{ indicatorColor: "#622a58" }}
        >
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
          <p className="text-[20px]">
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
      <div className="grid grid-cols-2 p-10">
        <div>
          <div
            className="border-[10px] border-[#ffbb00]"
            style={{
              width: 250,
              height: 460,
            }}
          >
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
        <div className="flex flex-col pl-6">
          <div className="flex flex-col h-[100%] text-white">
            <div className="bg-secondary rotate-[-3deg]">
              <p className="text-[28px] font-[800] p-3 leading-none rotate-[2deg]">
                {nombreCampaña}
              </p>
            </div>
            <br />
            <br />
            <br />
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
