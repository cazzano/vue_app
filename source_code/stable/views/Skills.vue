<template>
  <div class="py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Award class="text-primary" size="28" />
        My Skills
      </h1>

      <div class="card bg-base-100 p-6 shadow-md mb-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code2 class="text-primary" />
          Technical Skills
        </h2>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
            <Layout class="text-primary" size="20" />
            Frontend
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <FileCode size="16" />
                HTML/CSS
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <FileJson size="16" />
                JavaScript
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <Component size="16" />
                Vue.js
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <AtomIcon size="16" />
                React
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <Palette size="16" />
                Tailwind CSS
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <FileType size="16" />
                TypeScript
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary h-2.5 rounded-full" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
            <Server class="text-primary" size="20" />
            Backend
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <BoxIcon size="16" />
                Node.js
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-accent h-2.5 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <ArrowRightCircle size="16" />
                Express
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-accent h-2.5 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <Cog size="16" />
                Python
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-accent h-2.5 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <Database size="16" />
                MongoDB
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-accent h-2.5 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <TableIcon size="16" />
                PostgreSQL
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-accent h-2.5 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="font-medium flex items-center gap-2">
                <GitGraph size="16" />
                GraphQL
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-accent h-2.5 rounded-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <Briefcase class="text-primary" />
          Other Skills
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="badge badge-lg flex items-center gap-2 p-4 bg-base-200 border-primary">
            <GitBranch size="16" />
            Git & GitHub
          </div>
          <div class="badge badge-lg flex items-center gap-2 p-4 bg-base-200 border-primary">
            <Container size="16" />
            Docker
          </div>
          <div class="badge badge-lg flex items-center gap-2 p-4 bg-base-200 border-primary">
            <GitMerge size="16" />
            CI/CD
          </div>
          <div class="badge badge-lg flex items-center gap-2 p-4 bg-base-200 border-primary">
            <Users size="16" />
            Agile Development
          </div>
          <div class="badge badge-lg flex items-center gap-2 p-4 bg-base-200 border-primary">
            <PenTool size="16" />
            UI/UX Design
          </div>
          <div class="badge badge-lg flex items-center gap-2 p-4 bg-base-200 border-primary">
            <Smartphone size="16" />
            Responsive Design
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Award, Code2, Layout, FileCode, FileJson, Component, AtomIcon, Palette, FileType, 
         Server, BoxIcon, ArrowRightCircle, Cog, Database, TableIcon, GitGraph, 
         Briefcase, GitBranch, Container, GitMerge, Users, PenTool, Smartphone } from 'lucide-vue-next'

export default {
  name: 'Skills',
  components: {
    Award, 
    Code2, 
    Layout, 
    FileCode, 
    FileJson, 
    Component, 
    AtomIcon, 
    Palette, 
    FileType,
    Server, 
    BoxIcon, 
    ArrowRightCircle, 
    Cog, 
    Database, 
    TableIcon, 
    GitGraph,
    Briefcase, 
    GitBranch, 
    Container, 
    GitMerge, 
    Users, 
    PenTool, 
    Smartphone
  }
}
</script>
