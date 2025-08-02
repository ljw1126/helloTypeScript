import { Component } from "../components/component.js";

/**
 * Set of callbacks that a draggable component must implement to get notified when dragging starts and stops
 */
export interface Draggable {
  // Item reacts when dragging has started
  onDragStart(event: DragEvent): void;
  // Item reacts when the dragging has finished
  onDragEnd(event: DragEvent): void;
}

/**
 * Set of callbacks that an item that listens for drag hover needs to implement to get notified
 */
export interface Hoverable {
  // Notify when dragged item enters the area
  onDragEnter(event: DragEvent): void;
  // Notify when dragged item leaves the area
  onDragLeave(event: DragEvent): void;
}

/**
 * Set of callbacks that a component needs to implement to receive drops of dragged items
 */
export interface Droppable {
  // Method that takes care of what happens when a draggable item is hovered over the host widget
  onDragOver(event: DragEvent): void;
  //   Method that handles the dropping of a draggable item
  onDrop(event: DragEvent): void;
}

type GConstructor<T = {}> = new (...args: any[]) => T;
type DraggableClass = GConstructor<Component & Draggable>;

export function EnableDragging<TBase extends DraggableClass>(Base: TBase) {
  return class DraggableItem extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragstart', (event: DragEvent) => {
        this.onDragStart(event);
      });
      this.registerEventListener('dragend', (event: DragEvent) => {
        this.onDragEnd(event);
      });
    }
  };
}

type DragHoverClass = GConstructor<Component & Hoverable>;

export function EnableHover<TBase extends DragHoverClass>(Base: TBase) {
  return class DragHoverArea extends Base {
    constructor(...args: any[]) {
      super(...args);
      this.registerEventListener('dragenter', (event: DragEvent) => {
        event.preventDefault();
        this.onDragEnter(event);
      });
      this.registerEventListener('dragleave', (event: DragEvent) => {
        this.onDragLeave(event);
      });
    }
  };
}

type DropTargetClass = GConstructor<Component & Droppable>;

export function EnableDrop<TBase extends DropTargetClass>(Base: TBase) {
  return class DropArea extends Base {
      constructor(...args: any[]) {
        super(...args);

        this.registerEventListener('dragover', (event: DragEvent) => {
          event.preventDefault();
          this.onDragOver(event);
        });
  
        this.registerEventListener('drop', (event: DragEvent) => {
          event.preventDefault();
          this.onDrop(event);
        });
      }
  }
}