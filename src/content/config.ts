import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const rtos = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/rtos"}),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    codeUrl: z.string().url().optional(),
    siteUrl: z.string().url().optional(),
    image: z.string().optional(),
    lastUpdated: z.coerce.date(),
    star: z.number().default(0),
    version: z.string().optional(),
    date: z.coerce.date().optional(),
    components: z.array(z.string()).default([]),
    libraries: z.array(z.string()).default([]),
    licenses: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]),
  }),
});

const libraries = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/libraries"}),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    libraryType: z.enum([
      'gui',          // Graphical User Interface
      'filesystem',   // File Systems
      'networking',   // Network Stacks (TCP/IP)
      'wireless',     // Wireless Communication (Bluetooth, WiFi, LoRa, etc.)
      'storage',      // Flash/Storage Management
      'machine-learning',        // Machine Learning & AI
      'language',     // Programming Languages & Interpreters
      'hal',          // Hardware Abstraction Layer
      'middleware',   // Middleware & Frameworks
      'crypto',       // Cryptography & Security
      'sensor',       // Sensor Libraries
      'protocol',     // Communication Protocols (I2C, SPI, UART, etc.)
      'utils',        // Utilities & Helpers
    ]),
    codeUrl: z.string().url().optional(),
    siteUrl: z.string().url().optional(),
    image: z.string().optional(),
    lastUpdated: z.coerce.date(),
    star: z.number().default(0),
    version: z.string().optional(),
    date: z.coerce.date().optional(),
    components: z.array(z.string()).default([]),
    libraries: z.array(z.string()).default([]),
    licenses: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/projects"}),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    codeUrl: z.string().url().optional(),
    siteUrl: z.string().url().optional(),
    image: z.string().optional(),
    isShow: z.boolean().default(false),
    rtos: z.string(), // Reference to RTOS slug
    libraries: z.array(z.string()).default([]), // References to library slugs
  }),
});

export const collections = {rtos, libraries, projects};
