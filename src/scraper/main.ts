import { Observable, Subscription } from "rxjs";

function main(): Observable<void> {
  return new Observable((subscriber) => {
    // TODO: insert scrapers here like below
    // const scrapersObservable = merge(new JustJoinItScraper().scrap());
    // scrapersObservable.subscribe({
    //   next: (jobOffers) => Collector.collect(jobOffers),
    //   complete: () => subscriber.complete(),
    // });
    subscriber.complete();
  });
}

function closeIfSubscriptionClosed(subscription: Subscription) {
  if (!subscription.closed) {
    setTimeout(() => closeIfSubscriptionClosed(subscription), 1000);
  } else {
    process.exit();
  }
}

const subscription = main().subscribe();
closeIfSubscriptionClosed(subscription);
