import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
  url?: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Repository',
    children: [
      { name: 'Files', url: 'files' },
      { name: 'Commits', url: 'commits' },
      { name: 'Branches', url: 'branches' },
      { name: 'Tags', url: 'files' },
      { name: 'Contributors', url: 'files' },
      { name: 'Graph', url: 'files' },
      { name: 'Compare', url: 'files' },
    ],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_practice';

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: { name: node.name, url: node.url },
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
    // this.treeControl.expand;
    this.treeControl.toggle(this.treeControl.dataNodes[0]);

    // console.log(
    //   'treeControl ',
    //   this.treeControl.toggle(this.treeControl.dataNodes[0])
    // );
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
