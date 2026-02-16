from concept_analyzer import analyze_concept

def build_game(subject, concept, difficulty):
    analysis = analyze_concept(subject, concept, difficulty)

    return {
        "game_type": analysis["recommended_game"],
        "objective": analysis["learning_goal"],
        "rules": [
            "Answer challenges correctly",
            "Match elements in correct order",
            "Time-based scoring"
        ],
        "scoring_system": {
            "correct": 10,
            "incorrect": -5
        }
    }

