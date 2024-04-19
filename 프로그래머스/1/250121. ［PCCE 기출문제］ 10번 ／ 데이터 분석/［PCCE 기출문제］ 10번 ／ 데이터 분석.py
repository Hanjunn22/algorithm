def solution(data, ext, val_ext, sort_by):
    # Define the column index mapping for the keys
    index_map = {
        "code": 0,
        "date": 1,
        "maximum": 2,
        "remain": 3
    }
    
    # Filter data based on the ext and val_ext
    filtered_data = [
        record for record in data
        if record[index_map[ext]] < val_ext
    ]
    
    # Sort the filtered data based on sort_by
    sorted_data = sorted(
        filtered_data,
        key=lambda record: record[index_map[sort_by]]
    )
    
    return sorted_data