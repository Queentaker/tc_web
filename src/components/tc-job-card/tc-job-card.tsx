// src/components/tc-job-card/tc-job-card.tsx
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-job-card",
  styleUrl: "tc-job-card.css",
  shadow: true,
})
export class TcJobCard {
  @Prop() imageSrc: string;
  @Prop() jobTitle: string;
  @Prop() shortDescription: string;
  @Prop() detailedDescription: string;
  @Prop() imageOnLeft: boolean = false; // Defaults to false if not provided

  render() {
    const imageClass = this.imageOnLeft ? "order-1" : "order-2";
    const textClass = this.imageOnLeft ? "order-2" : "order-1";

    return (
      <div class="m-2 max-w-[90rem] p-4 font-sans shadow-md font-normal ">
        <div class="flex flex-col gap-16 md:gap-24">
          <div class="flex flex-col md:flex-row md:items-top">
            <div class={`items-top flex-1 p-4 ${textClass}`}>
              <h4 class="text-3xl font-semibold m-0">{this.jobTitle}</h4>
              <p class="text-xl mb-1">{this.shortDescription}</p>
              <p>{this.detailedDescription}</p>
            </div>
            <div class={`items-center flex-1 p-4 ${imageClass}`}>
              <img
                src={this.imageSrc}
                alt={this.jobTitle}
                class="max-w-full h-auto p-auto m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
