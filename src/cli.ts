#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import boxen from 'boxen';
import { readFileSync, existsSync, mkdirSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import semver from 'semver';
import YAML from 'yaml';
import fs from 'fs-extra';

const SKILLS_DIR = join(process.env.HOME || '', '.ai-skills');
const REGISTRY_URL = 'https://api.aiskills.dev'; // Placeholder

interface SkillMeta {
  name: string;
  description: string;
  version: string;
  author?: string;
  license?: string;
  keywords?: string[];
  compatibility?: string[];
  tools?: string[];
}

// Ensure skills directory exists
if (!existsSync(SKILLS_DIR)) {
  mkdirSync(SKILLS_DIR, { recursive: true });
}

function getInstalledSkills(): string[] {
  if (!existsSync(SKILLS_DIR)) return [];
  return readdirSync(SKILLS_DIR).filter(name => {
    const stat = statSync(join(SKILLS_DIR, name));
    return stat.isDirectory();
  });
}

function parseSkillMeta(skillPath: string): SkillMeta | null {
  const skillFile = join(skillPath, 'SKILL.md');
  if (!existsSync(skillFile)) return null;
  
  try {
    const content = readFileSync(skillFile, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
      return YAML.parse(match[1]);
    }
  } catch (e) {
    console.error(chalk.red(`Error parsing ${skillFile}:`), e);
  }
  return null;
}

async function searchRegistry(query: string): Promise<SkillMeta[]> {
  // Placeholder - would call actual registry API
  console.log(chalk.blue(`Searching registry for: "${query}"...`));
  return [];
}

async function installSkill(name: string): Promise<void> {
  const spinner = ora('Installing skill...').start();
  
  try {
    // Check if already installed
    const targetPath = join(SKILLS_DIR, name);
    if (existsSync(targetPath)) {
      spinner.warn('Skill already installed');
      return;
    }
    
    // Placeholder: would download from registry
    spinner.text = `Installing ${name} from registry...`;
    spinner.succeed(chalk.green(`Installed ${name}!`));
    
  } catch (error) {
    spinner.fail(chalk.red('Installation failed'));
    console.error(error);
  }
}

function listSkills(): void {
  const skills = getInstalledSkills();
  
  if (skills.length === 0) {
    console.log(chalk.yellow('No skills installed yet.'));
    console.log(chalk.blue('Run: skill install <name>'));
    return;
  }
  
  console.log(chalk.bold('\nInstalled Skills:\n'));
  
  for (const skill of skills) {
    const meta = parseSkillMeta(join(SKILLS_DIR, skill));
    if (meta) {
      console.log(chalk.green('✓ ') + chalk.bold(meta.name) + chalk.gray(` v${meta.version}`));
      console.log(`   ${meta.description || 'No description'}\n`);
    } else {
      console.log(chalk.green('✓ ') + chalk.bold(skill));
    }
  }
}

function searchSkills(query: string): void {
  console.log(chalk.blue(`\nSearching for: "${query}"...\n`));
  // Placeholder - would search registry
  console.log(chalk.yellow('Registry search coming soon!'));
}

function publishSkill(): void {
  const cwd = process.cwd();
  const skillFile = join(cwd, 'SKILL.md');
  
  if (!existsSync(skillFile)) {
    console.log(chalk.red('No SKILL.md found in current directory.'));
    return;
  }
  
  console.log(chalk.yellow('\nPublishing to registry...'));
  console.log(chalk.yellow('Authentication required. Configure with:'));
  console.log(chalk.blue('  skill auth login\n'));
}

const program = new Command();

program
  .name('skill')
  .description('AI Agent Skills Registry CLI')
  .version('1.0.0');

program
  .command('list')
  .description('List installed skills')
  .action(listSkills);

program
  .command('install <name>')
  .description('Install a skill from the registry')
  .alias('i')
  .action(installSkill);

program
  .command('search <query>')
  .description('Search the skill registry')
  .alias('s')
  .action(searchSkills);

program
  .command('publish')
  .description('Publish a skill to the registry')
  .action(publishSkill);

program
  .command('info <name>')
  .description('Show skill information')
  .action((name) => {
    const skillPath = join(SKILLS_DIR, name);
    if (!existsSync(skillPath)) {
      console.log(chalk.red(`Skill "${name}" not installed.`));
      return;
    }
    
    const meta = parseSkillMeta(skillPath);
    if (meta) {
      const info = boxen(
        `${chalk.bold(meta.name)} v${meta.version}\n\n` +
        `${meta.description || 'No description'}\n\n` +
        `Author: ${meta.author || 'Unknown'}\n` +
        `License: ${meta.license || 'MIT'}\n` +
        `Keywords: ${meta.keywords?.join(', ') || 'None'}\n` +
        `Compatibility: ${meta.compatibility?.join(', ') || 'None'}`,
        { padding: 1, borderStyle: 'round' }
      );
      console.log(info);
    }
  });

program.parse();
