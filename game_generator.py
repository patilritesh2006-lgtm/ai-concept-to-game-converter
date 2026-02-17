def generate_game(analysis):
    grade = analysis["grade"]

    if grade <= 3:
        game_type = "Picture Match Game"
    elif grade <= 6:
        game_type = "Quiz + Drag & Drop"
    else:
        game_type = "Scenario-based Challenge"

    return {
        "game_type": game_type,
        "objective": analysis["learning_goal"],
        "rules": [
            "Read the question",
            "Choose the correct answer",
            "Earn points for correct choices"
        ],
        "scoring": "+10 correct, -5 wrong"
    }
