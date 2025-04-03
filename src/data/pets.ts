export interface Pet {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Cat',
    description: 'A curious and independent feline, known for its agility and affection.',
    image: 'assets/images/cat.jpg'
  },
  {
    id: 2,
    name: 'Dog',
    description: 'A loyal and friendly companion, great for families and active lifestyles.',
    image: 'assets/images/dog.jpg'
  },
  {
    id: 3,
    name: 'Rabbit',
    description: 'A gentle and quiet pet that loves to nibble and hop around.',
    image: 'assets/images/rabbit.jpg'
  },
  {
    id: 4,
    name: 'Otter',
    description: 'An energetic and playful animal, often seen swimming and sliding.',
    image: 'assets/images/otter.jpg'
  }
];
