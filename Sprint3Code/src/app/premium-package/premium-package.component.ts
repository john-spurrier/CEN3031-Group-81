import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-package',
  templateUrl: './premium-package.component.html',
  styleUrls: ['./premium-package.component.css']
})
export class PremiumPackageComponent {
  title = 'Premium Package';
  subtitle = 'Get access to the ultimate life coaching program';
  imageSrc = 'https://i.kym-cdn.com/entries/icons/original/000/025/930/unknown_(2)(Photo)(noise_scale)(Level3)(width_800)(16bit).png';
  description = 'Everything from the intermediate package but more! Adds a personalized workout program, food and macro calculations, and even direct connection to real life coaches who can meet with you and help with any other needs. The ultimate package!';

  // Add more properties as needed
}
