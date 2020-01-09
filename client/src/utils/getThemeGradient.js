export default function getThemeGradient() {
  const linGrad = document
    .createElement('canvas')
    .getContext('2d')
    .createLinearGradient(0, 0, 0, 700);
  linGrad.addColorStop(0, '#EA4F87');
  linGrad.addColorStop(1, '#F37A6A');
  return linGrad;
}
