'use client'
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconArrowDown,
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconMoon,
  IconSun,
} from '@tabler/icons-react'
import { Analytics } from '@vercel/analytics/next'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { config } from './config'

export function CustomAppShell() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light')
  const { toggleColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setColorScheme(computedColorScheme)
  }, [computedColorScheme])

  const isDark = colorScheme === 'dark'

  return (
    <div className={classNames({ dark: isDark })}>
      {/* Fixed nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-[#252525] bg-white/80 dark:bg-[#131212]/80 backdrop-blur-md">
        <Container>
          <div className="h-14 flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-bold text-lg tracking-tight text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              DK
            </button>

            <nav className="hidden sm:flex items-center gap-6">
              {[
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'gallery' },
                { label: 'Experience', id: 'experience' },
                { label: 'Skills', id: 'skills' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>

            <ActionIcon variant="subtle" size="lg" onClick={toggleColorScheme}>
              {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
          </div>
        </Container>
      </header>

      {/* Background pattern */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-pattern -z-10 pointer-events-none"
      />

      <main>
        <Container>
          <Stack gap={0}>
            {/* Hero */}
            <section
              id="hero"
              className="min-h-screen flex flex-col justify-center pt-14"
            >
              <div className="relative py-20 sm:py-32">
                {/* Accent blob */}
                <div className="absolute -z-10 -top-10 right-0 w-[480px] h-[480px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="space-y-6 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Available for opportunities
                  </div>

                  <Title
                    order={1}
                    fw={800}
                    className="text-slate-900 dark:text-slate-50"
                    fz={{ base: 'xxl', sm: 'xxxl' }}
                    lh="1"
                  >
                    Hi, I&apos;m Dima
                  </Title>

                  <Text
                    fz={{ base: 'md', sm: 'lg' }}
                    c={isDark ? 'gray.3' : 'gray.7'}
                    fw={400}
                    lh="lg"
                  >
                    Full-Stack Engineer with 8 years of turning{' '}
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      &ldquo;can we build this?&rdquo;
                    </span>{' '}
                    into{' '}
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      &ldquo;shipped last Tuesday.&rdquo;
                    </span>{' '}
                    I thrive at the intersection of clean code, fast products,
                    and teams that actually enjoy what they&apos;re building.
                  </Text>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      variant="filled"
                      size="sm"
                      onClick={() => scrollToSection('experience')}
                      rightSection={<IconArrowRight size={16} />}
                    >
                      View Experience
                    </Button>
                    <Button variant="outline" size="sm">
                      <a
                        href={`mailto:${config.email}`}
                        className="flex items-center gap-2"
                      >
                        <IconMail size={16} /> Email Me
                      </a>
                    </Button>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={`https://www.google.com/maps?q=${config.location.lat},${config.location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-500 transition-colors"
                      title="Location"
                    >
                      <IconMapPin size={20} />
                    </a>
                    <a
                      href={config.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-500 transition-colors"
                    >
                      <IconBrandGithub size={20} />
                    </a>
                    <a
                      href={config.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-500 transition-colors"
                    >
                      <IconBrandLinkedin size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex justify-start mt-16 sm:mt-24">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-slate-400 dark:text-slate-600 hover:text-indigo-500 transition-colors"
                  >
                    <IconArrowDown size={20} className="animate-bounce" />
                  </button>
                </div>
              </div>
            </section>

            <Divider />

            {/* About */}
            <section id="about" className="py-16 sm:py-24">
              <SectionHeader label="About" title="A bit about me" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
                <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    I&apos;m a Full-Stack Engineer with 8 years of experience —
                    mostly living in the React &amp; TypeScript world, but
                    comfortable wherever the problem takes me.
                  </p>
                  <p>
                    Day-to-day, I lead teams, untangle gnarly problems, and turn
                    vague requirements into something everyone can build toward.
                    I&apos;d rather spend an hour documenting a decision than
                    spend a week undoing it.
                  </p>
                  <p>
                    When I&apos;m not shipping features, I&apos;m probably
                    tinkering with side projects, obsessing over performance
                    numbers, or trying to convince teammates that tests are
                    actually fun (results vary).
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      emoji: '⚛️',
                      label: 'React & TypeScript at heart',
                      desc: '8+ years of frontend expertise',
                    },
                    {
                      emoji: '🏗️',
                      label: 'Architecture that ages well',
                      desc: 'Systems designed for the long run',
                    },
                    {
                      emoji: '🚀',
                      label: 'Performance obsessed',
                      desc: "Speed is a feature, not a nice-to-have",
                    },
                    {
                      emoji: '🤝',
                      label: 'Teams ship better together',
                      desc: 'Leadership through collaboration',
                    },
                  ].map(({ emoji, label, desc }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 px-4 py-4 rounded-xl border border-slate-200 dark:border-[#2a2a2a] bg-slate-50 dark:bg-[#1a1a1a]"
                    >
                      <span className="text-xl mt-0.5">{emoji}</span>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Divider />

            {/* Gallery */}
            <section id="gallery" className="py-16 sm:py-24">
              <SectionHeader label="Projects" title="Project Gallery" />
              <Stack gap="xl" mt="xl">
                {config.gallery.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-2xl group cursor-pointer block no-underline shadow-sm hover:shadow-xl transition-shadow duration-300"
                    style={{ minHeight: 380 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      h={{ base: 320, sm: 460 }}
                      fit="cover"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <Group
                      justify="space-between"
                      align="flex-end"
                      className="absolute inset-0 p-6 sm:p-10"
                    >
                      <Box>
                        <Title order={2} c="white" fw={700} fz="xl">
                          {project.title}
                        </Title>
                        {project.description && (
                          <Text fz="sm" c="gray.4" mt={6}>
                            {project.description}
                          </Text>
                        )}
                      </Box>
                      <Button
                        component="span"
                        variant="white"
                        size="sm"
                        rightSection={<IconArrowRight size={14} />}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Project
                      </Button>
                    </Group>
                  </a>
                ))}
              </Stack>
            </section>

            <Divider />

            {/* Experience */}
            <section id="experience" className="py-16 sm:py-24">
              <SectionHeader
                label="Experience"
                title="Professional Experience"
              />
              <div className="relative mt-10">
                {/* Timeline line */}
                <div className="hidden sm:block absolute left-0 top-3 bottom-3 w-px bg-slate-200 dark:bg-[#2a2a2a]" />

                <Stack gap="lg">
                  {config.projects.map((project) => (
                    <div key={project.title} className="sm:pl-8 relative">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex absolute left-0 top-6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-[#131212]" />

                      <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#252525] bg-white dark:bg-[#1a1a1a] hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                          <div>
                            <Title
                              order={3}
                              fz="md"
                              fw={700}
                              className="text-slate-900 dark:text-slate-100"
                            >
                              {project.position}
                            </Title>
                            <Text fz="sm" c="indigo.5" fw={500} mt={2}>
                              {project.companyLink ? (
                                <a
                                  href={project.companyLink}
                                  className="hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {project.company}
                                </a>
                              ) : (
                                project.company
                              )}
                              {' · '}
                              {project.title}
                            </Text>
                          </div>
                          <Text
                            fz="xs"
                            c="gray.5"
                            className="whitespace-nowrap mt-1"
                          >
                            {project.period}
                          </Text>
                        </div>

                        <Text
                          fz="sm"
                          c={isDark ? 'gray.4' : 'gray.7'}
                          mb="md"
                          lh="lg"
                        >
                          {project.description}
                        </Text>

                        <ul className="space-y-2 mb-5">
                          {project.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-sm text-slate-500 dark:text-slate-400"
                            >
                              <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-indigo-400" />
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="light"
                              color="indigo"
                              size="sm"
                              radius="sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </Stack>
              </div>
            </section>

            <Divider />

            {/* Skills */}
            <section id="skills" className="py-16 sm:py-24">
              <SectionHeader label="Skills" title="Technical Skills" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                {config.skills.map((category) => (
                  <div
                    key={category.category}
                    className="p-6 rounded-2xl border border-slate-200 dark:border-[#252525] bg-white dark:bg-[#1a1a1a]"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-4">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-lg bg-slate-100 dark:bg-[#252525] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#333] hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="py-10 border-t border-slate-100 dark:border-[#212121] flex items-center justify-between text-sm text-slate-400 dark:text-slate-600">
              <span>© 2026 Dzmitry Karaleu</span>
              <div className="flex gap-4">
                <a
                  href={config.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition-colors"
                >
                  <IconBrandGithub size={18} />
                </a>
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500 transition-colors"
                >
                  <IconBrandLinkedin size={18} />
                </a>
              </div>
            </footer>
          </Stack>
        </Container>
      </main>

      <Analytics />
    </div>
  )
}

function Divider() {
  return <div className="w-full h-px bg-slate-100 dark:bg-[#212121]" />
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
        {label}
      </div>
      <Title
        order={2}
        fw={700}
        fz="xl"
        className="text-slate-900 dark:text-slate-50"
      >
        {title}
      </Title>
    </div>
  )
}
