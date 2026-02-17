import Button from "../../ui/button/Button";

export default function Contact() {
  return (
    <div className="flex justify-center bg-amber-50">
      <div className="max-w-[1200px]">
        <div className="grid grid-cols-2">
          <div className="py-[100px] flex  place-content-center">
            <div className=" place-content-center">
              <p className="color-secondary font-[800] text-[45px] leading-none">
                ¿QUÉ INICIATIVA DE
              </p>
              <p className="color-secondary font-[800] text-[45px] leading-none">
                SOSTENIBILIDAD
              </p>
              <div className="bg-secondary">
                <span className="text-white font-[800] text-[45px] leading-none">
                  QUIERES COMUNICAR?
                </span>
              </div>
              <div>
                <p className="py-[40px] text-neutral-500 text-[20px]">
                  Sientete libre de escribirnos a{" "}
                  <a href="mailto:hola@pulsoverde.com" className="font-[800]">
                    hola@pulsoverde.com
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary">
            <div className="px-12 py-4">
              <div className="grid grid-col-1 gap-6 pb-6">
                <p className="py-[30px] uppercase text-white text-center text-[26px] leading-none">
                  <span className="font-[800]">Dejanos un mensaje</span>
                  <br />
                  <span className="font-[300]">
                    Nos contáctaremos contigo de inmediato
                  </span>
                </p>
                <div className="bg-emerald-100 h-[55px] rounded-xl">
                  <input
                    className=" h-[100%] w-[100%] px-5 text-[20px]"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre Completo"
                  />
                </div>
                <div className="bg-emerald-100 h-[55px] rounded-xl">
                  <input
                    className=" h-[100%] w-[100%] px-5 text-[20px]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="bg-emerald-100 h-[55px] rounded-xl">
                  <input
                    className=" h-[100%] w-[100%] px-5 text-[20px]"
                    type="text"
                    name="asunto"
                    id="asunto"
                    placeholder="Asunto"
                  />
                </div>
                <div className="bg-emerald-100 h-[200px] rounded-xl">
                  <textarea
                    className="h-[100%] w-[100%] px-5 pt-3 text-[20px]"
                    name="mensaje"
                    id="mensaje"
                    placeholder="Mensaje"
                    cols={10}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="bg-primary color-terciary text-[20px] p-4 flex flex-1 justify-center cursor-pointer">
                    ENVIAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
