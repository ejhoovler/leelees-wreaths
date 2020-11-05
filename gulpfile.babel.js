import all from './gulp/imports';
import config from './gulp/config';
import tasks from 'require-dir';

tasks('./gulp/tasks', { recurse: true });