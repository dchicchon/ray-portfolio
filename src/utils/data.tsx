const upcycling1 = import.meta.glob<{ default: string }>('../assets/upcycling/*.jpg', {
  eager: true,
});
const upcycling2 = import.meta.glob<{ default: string }>('../assets/upcycling2/*.jpg', {
  eager: true,
});
const workshopFiles = import.meta.glob<{ default: string }>(
  '../assets/workshopday/*.jpg',
  { eager: true }
);
const backpackFiles = import.meta.glob<{ default: string }>('../assets/backpacks/*.{jpg,webp}', {
  eager: true,
});
const kimonoFiles = import.meta.glob<{ default: string }>('../assets/kimono/*.{jpg,webp}', {
  eager: true,
});

const kimonoImages = Object.values(kimonoFiles).map((mod) => mod.default);
const workshopImages = Object.values(workshopFiles).map((mod) => mod.default);
const upcyling1Images = Object.values(upcycling1).map((mod) => mod.default);
const upcycling2Images = Object.values(upcycling2).map((mod) => mod.default);
const backpackImages = Object.values(backpackFiles).map((mod) => mod.default);

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  images: Array<string>;
}
export const upcyclingProjects: Array<ProjectType> = [
  {
    id: 'upcycling-1',
    name: 'Upcycling',
    description: `Upcycled Aesop & Vans Tote Bag
Sustainability | Upcycling | Reinforced Construction

Project Summary:
Designed and constructed a tote bag by upcycling Aesop shopping bags (lightweight cotton) and a pair of Vans chino trousers (durable twill cotton). Leveraged the delicate Aesop cotton as the bag’s exterior for visual contrast while using the heavier Vans chino twill as an interior lining and structural backing to reinforce durability and shape. Integrated multiple functional features, including a zippered compartment and external pockets, blending aesthetic appeal with practical utility.

Key Techniques & Materials:

Material Pairing: Combined lightweight and heavy-duty fabrics to balance aesthetics with durability.
Reinforcement: Used twill cotton backing to support delicate exterior material and extend product lifespan.
Construction Details: Integrated compartments, secure stitching, and reinforced seams for longevity.
Skills Demonstrated:

Upcycling and sustainable material use
Reinforcement techniques for fabric durability
Precision sewing and attention to functional design`,
    images: upcyling1Images,
  },
  {
    id: 'upcycling-2',
    name: 'Upcyling 2',
    description: `
    Upcycled Outerwear & Apparel Tote Bag Collection
Sustainability | Upcycling | Product Circularity

Project Summary:
Created a series of tote bags by upcycling discarded garments, focusing on reducing textile waste and extending the lifecycle of high-quality materials. Two bags were crafted from a repurposed North Face Gore-Tex rain shell, with one incorporating additional canvas cotton for contrast, balancing utility and aesthetic design while preventing Gore-Tex waste from landfill. A third tote was made from damaged Vans chinos and a cotton twill jacket, giving the garments new purpose through creative reuse.

Key Techniques & Materials:

Garment Deconstruction & Material Salvage: Carefully deconstructed worn-out outerwear and apparel for reusable components.
Material Blending: Combined technical Gore-Tex with cotton canvas, and twill cotton with chino fabric, focusing on visual design and functionality.
Sustainability Focus: Upcycled discarded garments into practical, everyday accessories, preventing high-quality performance and woven textiles from becoming waste.
Skills Demonstrated:

Upcycling and sustainable material reuse
Garment deconstruction and reconstruction
Sewing, cutting, and assembly for functional design`,
    images: upcycling2Images,
  },
];

export const repairProjects: Array<ProjectType> = [
  {
    id: 'repair-1',
    name: 'Kimono Project',
    description: `
      Repairs: Lightweight Cotton Robe Restoration
Garment Longevity | Delicate Fabric Repair | Seam Reconstruction

Project Summary:
Restored a lightweight stretch cotton robe with frayed French seams and stress tears. Carefully seam-ripped and reshaped the armholes and side seams, reconstructing the French seams to maintain the garment’s original construction and aesthetic integrity. Additionally, darned small holes in high-tension areas to reinforce the fabric and extend the garment’s wearability.

Key Techniques & Materials:

French Seam Reconstruction: Opened and reshaped seams before re-stitching to restore structure.
Darning: Reinforced small tears in high-stress zones with precision stitching.
Lightweight Fabric Handling: Worked with stretch cotton to ensure durability without compromising drape or comfort.
Skills Demonstrated:

Advanced seam repair and garment reconstruction.
Precision sewing on delicate, lightweight fabrics.
Restoring structural integrity while preserving garment design.
      `,
    images: kimonoImages,
  },

  {
    id: 'repair-2',
    name: 'Backpack Project',
    description: `Repairs: Denim & Technical Pack Restoration
Garment Longevity | Heavyweight Materials | Technical Repair Techniques

Project Summary:
Executed detailed repair work focusing on reinforcing and extending the life of heavyweight and technical materials. Repaired a pair of Levi’s denim jeans using darning techniques to restore a large tear, paired with flat-felled seam reinforcement to ensure structural integrity and longevity. Additionally, repaired multiple heavyweight cotton-poly backpacks, addressing seam failures, structural wear, and fabric tears, restoring the products to functional and aesthetic standards.

Key Techniques & Materials:

Darning: Reinforced denim tear using precision darning, blending for durability and visual consistency.
Flat-Felled Seams: Applied for added strength on stress points in denim repair.
Backpack Repair: Worked with cotton-poly technical blends, reinforcing torn seams, replacing panels, and re-stitching high-wear areas.
Skills Demonstrated:

Repair techniques for denim, heavyweight cotton, and technical poly-blends.
Reinforcement sewing to prolong product lifecycle.
Attention to detail to blend durability and aesthetic quality in visible repairs.`,
    images: backpackImages,
  },
];

export const workshopProjects: Array<ProjectType> = [
  {
    id: 'workshop-1',
    name: 'Workshop 1',
    description: `
     Community: Hand Sewing & Garment Repair Workshop
Education | Community Engagement | Repair Techniques

Project Summary:
Hosted a sewing workshop at Fjällräven San Francisco, teaching community members basic hand-sewing techniques for garment repair, including Running Stitch, Backstitch, Ladder Stitch, and Blanket Stitch. The workshop focused on equipping individuals with practical mending skills to extend the life of their outdoor gear, empowering them to perform simple repairs while on the trail and promote sustainable garment care.

Key Techniques Taught:

Running Stitch
Backstitch
Ladder Stitch
Blanket Stitch
Skills Demonstrated:

Workshop Facilitation & Teaching
Sewing Demonstrations & Hands-On Instruction
Community Engagement & Sustainability Advocacy
     `,
    images: workshopImages,
  },
];

// TODO: move this by creating separate directory for each type of project
export const projects = [...upcyclingProjects, ...repairProjects, ...workshopProjects];
