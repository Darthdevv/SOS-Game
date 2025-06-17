import { AnimatedCarousel } from "./ui/AnimatedCarousel";

export function Carousel() {
  const testimonials = [
    {
      quote:
        "Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape? Making the right decisions could be the difference between life and death.",
      name: "What is SOS?",
      designation: "social battle royale game",
      src: "/images/image.jpg",
      width: 500,
      height: 500,
    },
    {
      quote:
        "In SOS, you can choose to play solo or team up with others. But remember, only three people can escape each round. Will you trust your friends or betray them for your own survival?",
      name: "Play Solo or Team Up",
      designation: "strategic gameplay",
      src: "/images/image (1).jpg",
      width: 500,
      height: 500,
    },
    {
      quote:
        "The game is set on a mysterious island filled with dangers and secrets. Explore the island, gather resources, and uncover its mysteries while trying to survive against other players.",
      name: "Explore the Island",
      designation: "mysterious environment",
      src: "/images/image (2).jpg",
      width: 500,
      height: 500,
    },
  ];

  return <AnimatedCarousel testimonials={testimonials} autoplay />;
}


