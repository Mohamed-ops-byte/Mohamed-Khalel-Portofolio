import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputPath = path.join(__dirname, '..', 'src', 'assets', '1.webp')
const outputDir = path.join(__dirname, '..', 'src', 'assets')
const targetWidths = [480, 768, 1024]

const image = sharp(inputPath)
const metadata = await image.metadata()

if (!metadata.width) {
  throw new Error('Unable to read image width from src/assets/1.webp')
}

const widthsToGenerate = targetWidths.filter((width) => width <= metadata.width)
const webpWidths = widthsToGenerate.filter((width) => width < metadata.width)

await Promise.all([
  ...webpWidths.map(async (width) => {
    const outputPath = path.join(outputDir, `1-${width}.webp`)
    await sharp(inputPath)
      .resize({ width })
      .webp({ quality: 72, effort: 4 })
      .toFile(outputPath)
  }),
  ...widthsToGenerate.map(async (width) => {
    const outputPath = path.join(outputDir, `1-${width}.avif`)
    await sharp(inputPath)
      .resize({ width })
      .avif({ quality: 50, effort: 4 })
      .toFile(outputPath)
  }),
])

console.log(
  `Generated ${webpWidths.length} WebP and ${widthsToGenerate.length} AVIF variants.`,
)
