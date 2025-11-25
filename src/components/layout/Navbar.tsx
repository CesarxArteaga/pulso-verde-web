import { ListIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-6 bg-black h-[70px]">
      <img
        src={"/assets/logos/pulso-verde-blanco-x1.png"}
        className="h-[50px]"
      />

      <div className="text-white flex justify-evenly w-[300px]">
        {/* <ListIcon weight="thin" color="#FFF" size={44} /> */}
        <div>Inicio</div>
        <div>Contenido</div>
        <div>Equipo</div>
        <div>Contacto</div>
      </div>
    </div>
  );
}
