function vote_elig() { // ternary operator to determine if someone is eligible to vote
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
