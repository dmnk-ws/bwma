import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-counter-component',
  imports: [
    MatButton
  ],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss',
})
export class CounterComponent {
  protected counter: WritableSignal<number> = signal<number>(0);
  protected isEven: Signal<boolean> = computed<boolean>(() => this.counter() % 2 === 0)

  public increment() {
    this.counter.update((counter) => counter + 1);
  }

  public decrement() {
    this.counter.update((counter) => counter - 1);
  }
}
