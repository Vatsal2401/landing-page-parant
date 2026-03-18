import { projects } from '@/data/projects';
import WorkClient from './WorkClient';

export default function WorkPage() {
  return <WorkClient projects={projects} />;
}
