
export interface Bonus {
    id: string;
    title: string;
    description: string;
    value: number;
}

export const premiumBonuses: Bonus[] = [
    {
        id: "mapa-biblia",
        title: "Mapa Didáctico de la Biblia",
        description: "Visualiza la línea de tiempo sagrada. Contexto histórico y estructura bíblica en una sola página.",
        value: 27
    },
    {
        id: "mapa-evangelhos",
        title: "Mapas Mentales de los Evangelios",
        description: "Conecta los 4 evangelios. Ve las armonías y conexiones entre Mateo, Marcos, Lucas y Juan claramente.",
        value: 37
    },
    {
        id: "apostolos",
        title: "Los 12 Apóstoles de Jesús",
        description: "Conoce a los hombres que cambiaron el mundo. Historias de fe y sacrificio que inspirarán tu caminar.",
        value: 27
    },
    {
        id: "batalhas",
        title: "Venciendo Batallas Espirituales",
        description: "Armas y estrategias bíblicas para la victoria. Guerra espiritual explicada de forma práctica y segura.",
        value: 47
    }
];

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    location: string;
    quote: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Carlos Andrade",
        role: "Líder de Célula",
        location: "Ciudad de México - México",
        quote: "Finalmente un material que va directo al grano. La claridad de los estudios sobre las cartas paulinas cambió completamente mi forma de leer la Biblia. Ya gasté mucho en cursos de teología y ninguno me dio la claridad que este material me dio."
    },
    {
        id: 2,
        name: "Juliana Martins",
        role: "Profesora",
        location: "Buenos Aires - Argentina",
        quote: "Siempre me sentí intimidada por la teología. Este material rompió todas las barreras. El lenguaje es simple y los mapas mentales son geniales para conectar las ideas. ¡Lo recomiendo mucho! Ya lo indiqué a todo mi grupo de estudio bíblico."
    },
    {
        id: 3,
        name: "Ricardo Souza",
        role: "Pastor Auxiliar",
        location: "Bogotá - Colombia",
        quote: "El paquete es increíble. Los bonos por sí solos ya valdrían la inversión. Es un arsenal de conocimiento que todo cristiano que desea crecer debería tener. ¡Transformador! Mi esposa también lo está usando y nuestros devocionales nunca fueron tan profundos."
    }
];