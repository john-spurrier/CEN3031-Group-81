import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-package',
  templateUrl: './premium-package.component.html',
  styleUrls: ['./premium-package.component.css']
})
export class PremiumPackageComponent {
  title = 'Premium Package';
  subtitle = 'Get access to the ultimate life coaching program';
  imageSrc = 'https://example.com/premium-package-image.jpg';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae erat vitae quam blandit malesuada quis sit amet tellus. Sed quis justo ac tortor mattis blandit. Donec at eros lorem.';

  // Add more properties as needed
}