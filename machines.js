function create() {
    return {
        cur: 0,
        played: 0,
        won: 0,
    };
}

const stats = {
    balance: 100,
    winnings: 0,
    spent: 0,
}

const machines = [create(), create(), create(), create()];

function update_stats() {
    $('#balance').text(`€${stats.balance}`);
    $('#spent').text(`€${stats.spent}`);
    $('#winnings').text(`€${stats.winnings}`);
    $('#winrate').text(percentage(stats.winnings, stats.spent));
}

function percentage(value, total) {
    if (total === 0) {
        return '- %';
    } else {
        const perc = Math.round(value / total * 10000) / 100;
        return `${perc} %`;
    }
}

function update_machines() {
    machines.forEach((machine, idx) => {
        $(`#won${idx}`).text(machine.won);
        $(`#played${idx}`).text(machine.played);
        $(`#perc${idx}`).text(percentage(machine.won, machine.played));
    });
}

function play(idx) {
    machines[idx].played += 1;

    stats.balance -= 1;
    stats.spent += 1;

    if (rand[idx][machines[idx].cur]) {
        machines[idx].won += 1;
        stats.balance += 2;
        stats.winnings += 2;
    }

    machines[idx].cur += 1;

    const wheelA = document.getElementById(`wheels${idx}A`);
    const wheelB = document.getElementById(`wheels${idx}B`);
    const wheelC = document.getElementById(`wheels${idx}C`);

    wheelA.classList.remove('rollingA');
    wheelB.classList.remove('rollingB');
    wheelC.classList.remove('rollingC');

    void wheelA.offsetWidth;
    void wheelB.offsetWidth;
    void wheelC.offsetWidth;

    wheelA.classList.add('rollingA');
    wheelB.classList.add('rollingB');
    wheelC.classList.add('rollingC');
}

$('#play0').click(() => {
    play(0);
    update_machines();
    update_stats();
});
$('#play1').click(() => {
    play(1);
    update_machines();
    update_stats();
});
$('#play2').click(() => {
    play(2);
    update_machines();
    update_stats();
});
$('#play3').click(() => {
    play(3);
    update_machines();
    update_stats();
});

update_stats();
update_machines();

