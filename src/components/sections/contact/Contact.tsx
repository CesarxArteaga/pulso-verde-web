import Button from "../../ui/button/Button";

export default function Contact() {
  return (
    <div className="flex justify-center bg-primary text-white">
      <div className="flex flex-1 flex-row max-w-[1100px] pt-12 pb-12">
        <div className="flex flex-col flex-1">
          <div className="p-6">
            <h2 className="text-[70px]">Conversemos</h2>
            <br />
            <br />
            <p className="text-[18px] max-w-[400px]">
              Tienes dudas o necesitas mayor información? Ponte en contacto con
              nosotros para poder ayudarte!
            </p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="p-4 flex flex-1">
            <div className="bg-white flex-1 rounded-[30px] p-10">
              <div>
                <h2 className="color-primary text-[24px] mb-6 text-center">Envianos un mensaje!</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-100 p-4 rounded-md">
                  <input
                    className="flex w-[100%] placeholder:text-gray-500 text-black"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombres"
                  />
                </div>
                <div className="bg-slate-100 p-4 rounded-md">
                  <input
                    className="flex w-[100%] placeholder:text-gray-500 text-black"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Apellidos"
                  />
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-md mb-6">
                <input
                  className="flex w-[100%] placeholder:text-gray-500 text-black"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="bg-slate-100 p-4 rounded-md mb-6">
                <input
                  className="flex w-[100%] placeholder:text-gray-500 text-black"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Asunto"
                />
              </div>
              <div>
                <div className="bg-slate-100 p-4 mb-6 rounded-md">
                  <textarea
                    className="w-[100%] placeholder:text-gray-500 text-black"
                    placeholder="Mensaje"
                  />
                </div>
              </div>
              <div>
                <Button text="Enviar" fullWidth={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
