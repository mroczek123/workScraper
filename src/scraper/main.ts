import JustJoinItScraper from '@src/scraper/sites/just-join-it/scraper';
import { merge, Observable, Subscription } from 'rxjs';
import Collector from './collector';

function main(): Observable<void> {
  return new Observable(subscriber => {
    const scrapersObservable = merge(
      new JustJoinItScraper().scrap()
    );
    scrapersObservable.subscribe({
      next: (jobOffers) => Collector.collect(jobOffers),
      complete: () => subscriber.complete()
    })
  })
}

function closeIfSubscriptionClosed(subscription: Subscription) {
  if (!subscription.closed) {
    setTimeout(() => closeIfSubscriptionClosed(subscription), 1000)
  } else {
    process.exit()
  }
}

const subscription = main().subscribe();
closeIfSubscriptionClosed(subscription);