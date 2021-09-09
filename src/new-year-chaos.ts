

function minimumBribes(items: number[]): void {
    let p1 = 1, p2 = 2, p3 = 3;
    let bribeCount = 0;

    for (let i: number = 0; i < items.length; i++) {
        // check if current item is still in its original position
        // p1 is the rightful position for the item in the current index
        if (items[i] === p1) {
            // update next 3 valid positions
            p1 = p2;
            p2 = p3;
            p3 += 1;
        }
        // check if current item has moved one place after bribe
        // is p2 supposed to be your position?
        else if (items[i] === p2) {
            p2 = p3;
            p3 += 1;
            bribeCount += 1;
        }
        // check if current item has moved two places after bribe
        // is p3 supposed to be your position?
        else if (items[i] === p3) {
            p3 += 1;
            bribeCount += 2;
        }
        // current item must have moved more than two places to the left
        else {
            console.log("Too chaotic");
            return;
        }
    }

    console.log(bribeCount);
}



minimumBribes([2, 1, 5, 3, 4]);