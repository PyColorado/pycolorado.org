import os
import csv
import json
import datetime


def read_data(input_file):
    output = []
    with open(input_file) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        header_row =  next(csv_reader)
        headers = [x.lower() for x in header_row]
        for row in csv_reader:
            output.append(dict(zip(headers, row)))
    return output


def dump(filename, data):
    output_file = os.path.join(os.path.dirname(__file__), f'{filename}.json')
    with open(output_file, 'w') as f:
        json.dump(data, f)


def main():
    filename = 'website'
    input_file = os.path.join(os.path.dirname(__file__), f'{filename}.csv')
    data = read_data(input_file)
    new_filename = f'{filename}-{datetime.datetime.now().strftime("%Y%m%d-%H%M%S")}'
    print(new_filename)
    dump(new_filename, data)


if __name__ == '__main__':
    main()
