import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-advantage-column",
  styleUrl: "tc-advantage-column.css",
  shadow: true,
})
export class AdvantageColumn {
  @Prop() advantageTitle: string;
  @Prop() advantageText: string;
  @Prop() iconSvgPath: string;
  @Prop() iconSvgViewBox: string;
  @Prop() iconColor: string = "rgb(255, 255, 255)";
  @Prop() iconBackground: string = "rgb(0, 0, 0)";
  @Prop() iconSvgXmlns: string = "http://www.w3.org/2000/svg";

  render() {
    return (
      <div class="flex flex-col items-center max-w-40">
        <div
          class="flex flex-col w-36 h-36 rounded-full  items-center justify-center"
          style={{ backgroundColor: this.iconBackground }}
        >
          <svg
            class="h-20 w-21"
            xmlns={this.iconSvgXmlns}
            viewBox={this.iconSvgViewBox}
          >
            <path d={this.iconSvgPath} fill={this.iconColor} />
          </svg>
        </div>
        <h3 class="text-2xl md:text-3xl font-sans mt-4">
          {this.advantageTitle}
        </h3>
        <div class="mt-2 max-w-xs">
          <p class="prose-lg font-sans">{this.advantageText}</p>
        </div>
      </div>
    );
  }
}