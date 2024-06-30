const testCases = [
    {
        name: 'cpp : hello world',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    cout << "hello world";\n' +
                'return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : print stdin',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n\n' +
                'using namespace std;\n' +
                'int main(){\n\n' +
                '    int a;\n' +
                '    while(cin >> a){\n' +
                '        cout << a << endl;\n' +
                '    }\n' +
                '    return 0;\n\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },

    },
    {
        name: 'cpp : for loop',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    for(int i = 1; i <= 5; i++) {\n' +
                '        cout << i << " ";\n' +
                '    }\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1 2 3 4 5 ',
            status: 200,
            error: 0,},
        },
        {
            name: 'cpp : if else',
            reqObject: {
                language: 'cpp',
                script:
                    '#include<bits/stdc++.h>\n' +
                    'using namespace std;\n' +
                    'int main(){\n' +
                    '    int x = 10;\n' +
                    '    if(x > 5) {\n' +
                    '        cout << "x is greater than 5";\n' +
                    '    } else {\n' +
                    '        cout << "x is not greater than 5";\n' +
                    '    }\n' +
                    '    return 0;\n' +
                    '}\n',
            },
            expectedResponse: {
                val: 'x is greater than 5',
                status: 200,
                error: 0,},
            },
    {
        name: 'nodejs : hello world',
        reqObject: {
            language: 'nodejs',
            script: 'console.log(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : print stdin',
        reqObject: {
            language: 'nodejs',
            script:
                'process.stdin.setEncoding(\'utf8\'); \n ' +
                'process.stdin.on(\'data\', (input) => { \n ' +
                '  console.log(input); \n ' +
                ' \n ' +
                '}); \n ',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : for loop',
        reqObject: {
            language: 'nodejs',
            script:
                'for(let i = 1; i <= 5; i++) {\n' +
                '    console.log(i);\n' +
                '}',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : if else',
        reqObject: {
            language: 'nodejs',
            script:
                'let x = 10;\n' +
                'if(x > 5) {\n' +
                '    console.log("x is greater than 5");\n' +
                '} else {\n' +
                '    console.log("x is not greater than 5");\n' +
                '}',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : hello world',
        reqObject: {
            language: 'python',
            script: 'print(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : print stdin',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    while(True):\n' +
                '        line = input()\n' +
                '        if not line:\n' +
                '            break\n' +
                '        print(line)\n' +
                'except EOFError:\n' +
                '    pass',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : for loop',
        reqObject: {
            language: 'python',
            script:
                'for i in range(1, 6):\n' +
                '    print(i)\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : if else',
        reqObject: {
            language: 'python',
            script:
                'x = 10\n' +
                'if x > 5:\n' +
                '    print("x is greater than 5")\n' +
                'else:\n' +
                '    print("x is not greater than 5")\n',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : hello world',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n\n' +
                '    printf("hello world");\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : print stdin',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int number;\n' +
                '    while (scanf("%d", &number) == 1) {\n' +
                '        printf("%d\\n", number);\n' +
                '    } \n' +
                '    return 0;\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : for loop',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n' +
                '    for(int i = 1; i <= 5; i++) {\n' +
                '        printf("%d\\n", i);\n' +
                '    }\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : if else',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n' +
                '    int x = 10;\n' +
                '    if(x > 5) {\n' +
                '        printf("x is greater than 5");\n' +
                '    } else {\n' +
                '        printf("x is not greater than 5");\n' +
                '    }\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'x is greater than 5',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : hello world',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("hello world");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        while (scanner.hasNextInt()) {\n' +
                '            int number = scanner.nextInt();\n' +
                '            System.out.println(number);\n' +
                '        } \n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : for loop',
        reqObject: {
            language: 'java',
            script:
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        for(int i = 1; i <= 5; i++) {\n' +
                '            System.out.println(i);\n' +
                '        }\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },

    {
        name: 'java : if else',
        reqObject: {
            language: 'java',
            script:
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        int x = 10;\n' +
                '        if(x > 5) {\n' +
                '            System.out.println("x is greater than 5");\n' +
                '        } else {\n' +
                '            System.out.println("x is not greater than 5");\n' +
                '        }\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print hello world',
        reqObject: {
            language: 'ruby',
            script:
                "print 'hello world'"
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print stdin',
        reqObject: {
            language: 'ruby',
            script:
                'user_input = gets.chomp\n' +
                'puts user_input',
            stdin: '10\n'
        },
        expectedResponse: {
            val: '10\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : for loop',
        reqObject: {
            language: 'ruby',
            script:
                '(1..5).each do |i|\n' +
                '    puts i\n' +
                'end',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : if else',
        reqObject: {
            language: 'ruby',
            script:
                'x = 10\n' +
                'if x > 5\n' +
                '    puts "x is greater than 5"\n' +
                'else\n' +
                '    puts "x is not greater than 5"\n' +
                'end',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'TLE test',
        reqObject: {
            language: 'nodejs',
            script: 'for(let i=0 ; ; ){i++}',
        },
        expectedResponse: {
            val: 'Time limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test',
        reqObject: {
            language: 'python',
            script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 2',
        reqObject: {
            language: 'python',
            script:
                'import time\n' +
                'def consume_memory(target_mb, duration_sec):\n' +
                '    float_size = 8\n' +
                '    floats_per_mb = (1024 * 1024) // float_size\n' +
                '    total_floats = target_mb * floats_per_mb\n' +
                '    iterations = int(duration_sec / 0.1)\n' +
                '    floats_per_iteration = total_floats // iterations\n' +
                '    memory_hog = []\n' +
                '    for _ in range(iterations):\n' +
                '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                '        time.sleep(0.1)\n' +
                'consume_memory(1000, 1)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 3',
        reqObject: {
            language: 'python',
            script:
                'a = [100]\n' +
                'for i in a:\n' +
                '    a.append(i)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'OPEN AI test promptv1',
        reqObject: {
            language: 'promptv1',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'OPEN AI test promptv2',
        reqObject: {
            language: 'promptv2',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },

    // Go test cases
    {
        name: 'go : hello world',
        reqObject: {
            language: 'go',
            script:
                'package main\n\n' +
                'import "fmt"\n\n' +
                'func main() {\n' +
                '    fmt.Println("hello world")\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : print stdin',
        reqObject: {
            language: 'go',
            script:
                'package main\n\n' +
                'import (\n' +
                '    "bufio"\n' +
                '    "fmt"\n' +
                '    "os"\n' +
                ')\n\n' +
                'func main() {\n' +
                '    scanner := bufio.NewScanner(os.Stdin)\n' +
                '    for scanner.Scan() {\n' +
                '        fmt.Println(scanner.Text())\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : for loop',
        reqObject: {
            language: 'go',
            script:
                'package main\n\n' +
                'import "fmt"\n\n' +
                'func main() {\n' +
                '    for i := 1; i <= 5; i++ {\n' +
                '        fmt.Println(i)\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : if else',
        reqObject: {
            language: 'go',
            script:
                'package main\n\n' +
                'import "fmt"\n\n' +
                'func main() {\n' +
                '    x := 10\n' +
                '    if x > 5 {\n' +
                '        fmt.Println("x is greater than 5")\n' +
                '    } else {\n' +
                '        fmt.Println("x is not greater than 5")\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },

    // Rust test cases
    {
        name: 'rust : hello world',
        reqObject: {
            language: 'rust',
            script:
                'fn main() {\n' +
                '    println!("hello world");\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : print stdin',
        reqObject: {
            language: 'rust',
            script:
                'use std::io::{self, BufRead};\n\n' +
                'fn main() {\n' +
                '    let stdin = io::stdin();\n' +
                '    for line in stdin.lock().lines() {\n' +
                '        println!("{}", line.unwrap());\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : if else',
        reqObject: {
            language: 'rust',
            script:
                'fn main() {\n' +
                '    let x = 10;\n' +
                '    if x > 5 {\n' +
                '        println!("x is greater than 5");\n' +
                '    } else {\n' +
                '        println!("x is not greater than 5");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'rust : while loop',
        reqObject: {
            language: 'rust',
            script:
                'fn main() {\n' +
                '    let mut i = 1;\n' +
                '    while i <= 5 {\n' +
                '        println!("{}", i);\n' +
                '        i += 1;\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },

    // Kotlin test cases
    {
        name: 'kotlin : hello world',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    println("hello world")\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : print stdin',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    val input = generateSequence(::readLine).joinToString("\\n")\n' +
                '    println(input)\n' +
                '}\n',
            stdin: '1 2 3\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : if else',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    val x = 10\n' +
                '    if (x > 5) {\n' +
                '        println("x is greater than 5")\n' +
                '    } else {\n' +
                '        println("x is not greater than 5")\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'x is greater than 5\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : while loop',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    var i = 1\n' +
                '    while (i <= 5) {\n' +
                '        println(i)\n' +
                '        i++\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: '1\n2\n3\n4\n5\n',
            status: 200,
            error: 0,
        },
    },

];

module.exports = { testCases }
