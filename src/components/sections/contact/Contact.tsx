export default function Contact() {
  return (
    <div className="flex justify-center bg-amber-50">
      <div className="max-w-[1200px]">
        <div className="md:grid grid-cols-2">
          <div
            className="
                      pt-[50px]
                      px-6 
                      flex  
                      flex-col
                      place-content-center
          "
          >
            <div
              className="
            "
            >
              <div className=" place-content-center">
                <p
                  className="color-secondary 
              font-[700]
              text-[40px] 
              leading-none"
                >
                  ¿Qué iniciativa de sostenibilidad quieres comunicar?
                </p>
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
            <div
              className="
                          px-6
                          md:px-10
                          pt-[50px]
                          pb-[50px]
                        "
            >
              <div className="grid grid-col-1 gap-6 ">
                <p
                  className="
                            text-white 
                            text-center 
                            font-[700]
                            text-[40px]
                            leading-none
                            "
                >
                  Dejanos un mensaje
                </p>
                <p className="text-white text-[20px] text-center leading-none">
                  Nos contáctaremos contigo de inmediato
                </p>
                <div className="bg-emerald-100 h-[55px] rounded-md">
                  <input
                    className=" h-[100%] w-[100%] px-5 text-[20px] placeholder:text-neutral-500"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre Completo"
                  />
                </div>
                <div className="bg-emerald-100 h-[55px] rounded-md">
                  <input
                    className=" h-[100%] w-[100%] px-5 text-[20px] placeholder:text-neutral-500"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="bg-emerald-100 h-[55px] rounded-md">
                  <input
                    className=" h-[100%] w-[100%] px-5 text-[20px] placeholder:text-neutral-500"
                    type="text"
                    name="asunto"
                    id="asunto"
                    placeholder="Asunto"
                  />
                </div>
                <div className="bg-emerald-100 h-[200px] rounded-md">
                  <textarea
                    className="h-[100%] w-[100%] px-5 pt-3 text-[20px] placeholder:text-neutral-500"
                    name="mensaje"
                    id="mensaje"
                    placeholder="Mensaje"
                    cols={10}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="bg-primary rounded-md color-terciary text-[20px] p-4 flex flex-1 justify-center cursor-pointer">
                    Enviar
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
