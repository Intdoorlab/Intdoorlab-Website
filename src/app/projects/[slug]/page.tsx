import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, getProjectBySlug } from '@/data/projects';
import { Navigation } from '@/components/Navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { Footer } from '@/components/Footer';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} — ${project.category}`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}

