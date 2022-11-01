import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";

export function HomeHeader() {
  return (
    <header class="bg-yellow-100 relative min-h-[5vh]">
      <Container>
		<div class="relative h-32 w-50 text-4xl"> 
		  <div class="absolute inset-y-0 left-0 w-50">Mehmet Emre Bozkurt</div>
	    </div>
		<div class="relative h-32 w-50 text-4xl">
  <div class="absolute top-0 right-0 h-16 w-50">CV</div>
</div>
<div class="relative h-32 w-50 text-4xl">
  <div class="absolute bottom-0 right-0 h-16 w-50">LinkedIN</div>
</div>
      </Container>
    </header>
  );
}
